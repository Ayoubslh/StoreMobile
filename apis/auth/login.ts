import { useMutation } from '@tanstack/react-query';
import { UserType } from '~/types/UserType';



type LoginInput = {
  email: string;
  password: string;
};

const Login=async ({ email, password }: LoginInput) => {
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/users/login`, {
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
  return useMutation<UserType, Error, LoginInput>({
    mutationFn:Login,
    onSuccess: (data) => {
    
      console.log('Login successful:', data);
    },
    onError: (error) => {
      console.error('Login error:', error);
    }

   })
}

