import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';
import { UserType } from '~/types/UserType';
import { useToast } from '~/hooks/useToaste';


type SignupInput ={
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}


const Signup=async (signupdata: SignupInput) => {
    const res = await fetch(`https://hptec.onrender.com/api/v1/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupdata),
    });
    
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Login failed');
    }
    
    const data: UserType = await res.json();
    return data; 

}

export const useSignup = () => {
  const { onError, onSuccess } = useToast();
  return useMutation<UserType, Error, SignupInput>({
    mutationFn:Signup,
    onSuccess: (data) => {
      onSuccess('SignUp successful', 'Welcome aboard!');
      router.replace('/(tabs)/home');
      
    },
    onError: (error) => {
      onError('SignUp failed', error.message);
      console.error('SignUp  error:', error);
    }

   })
}

