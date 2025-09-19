import { useMutation } from '@tanstack/react-query';
import { UserType } from '~/types/UserType';
import { useToast } from '~/hooks/useToaste';
import { router } from 'expo-router';


type LoginInput = {
  email: string;
  password: string;
};


const Login=async ({ email, password }: LoginInput) => {
    const res = await fetch(`https://hptec.onrender.com/api/v1/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Login failed');
    }
    
    const data: UserType = await res.json();
    return data; // returns user or token

}

export const useLogin = () => {
  const { onError, onSuccess } = useToast();
  return useMutation<UserType, Error, LoginInput>({
    mutationFn:Login,
    onSuccess: (data) => {

      onSuccess('Login successful', 'Welcome back!');
      router.replace('/(tabs)/home')
      
    },
    onError: (error) => {
      onError('Login failed', error.message);
      console.error('Login error:', error);
    }

   })
}

