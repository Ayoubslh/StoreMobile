import { YStack, Input, Text, Button, Label, ScrollView, Separator, Spinner } from 'tamagui';
import { useForm, Controller } from 'react-hook-form';
import { Link, router, Stack } from 'expo-router';
import { useLogin } from '~/apis/auth/login'; 

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const loginMutation = useLogin();

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data)
  };

  const continueAsGuest = () => {
    router.replace('/(tabs)/home');
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <ScrollView backgroundColor="white">
        <YStack f={1} p="$4" gap="$4" mt="$6">
          <Text fontSize="$8" fontWeight="800" color="#313131">Welcome Back</Text>
          <Text color="#C67C4E">Login to your account</Text>

          <Label>Email</Label>
          <Controller
            control={control}
            name="email"
            rules={{ required: 'Email is required' }}
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#fff"
                borderColor={errors.email ? 'red' : '#E3E3E3'}
                value={value}
                onChangeText={onChange}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
          {errors.email && <Text color="red">{errors.email.message}</Text>}

          <Label>Password</Label>
          <Controller
            control={control}
            name="password"
            rules={{ required: 'Password is required' }}
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#fff"
                borderColor={errors.password ? 'red' : '#E3E3E3'}
                value={value}
                onChangeText={onChange}
                placeholder="Enter your password"
                secureTextEntry
              />
            )}
          />
          {errors.password && <Text color="red">{errors.password.message}</Text>}

          <Button
            theme="active"
            backgroundColor="#C67C4E"
            color="white"
            onPress={handleSubmit(onSubmit)}
            disabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? <Spinner color="white" /> : 'Login'}
          </Button>

          <Button
            theme="active"
            backgroundColor="#E3E3E3"
            color="#313131"
            onPress={continueAsGuest}
          >
            Continue as guest
          </Button>

          <Separator borderColor="#E3E3E3" />

          <Text ta="center" color="#313131">
            Don’t have an account?{' '}
            <Link href={'/auth/signup'}>
              <Text color="#C67C4E">Sign Up</Text>
            </Link>
          </Text>
        </YStack>
      </ScrollView>
    </>
  );
}
