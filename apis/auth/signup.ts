import { useMutation } from '@tanstack/react-query';
import { UserType } from '~/types/UserType';


type SignupInput ={
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}


const Signup=async (signupdata: SignupInput) => {
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/users/signup`, {
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
  return useMutation<UserType, Error, SignupInput>({
    mutationFn:Signup,
    onSuccess: (data) => {
    
      console.log('Login successful:', data);
    },
    onError: (error) => {
      console.error('Login error:', error);
    }

   })
}

