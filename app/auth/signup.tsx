import { YStack, Input, Text, Button, Label, ScrollView, Separator, Spinner } from 'tamagui'
import { useForm, Controller } from 'react-hook-form'
import { Link, Stack, router } from 'expo-router'
import { useSignup } from '~/apis/auth/signup'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from '~/utils/zod/signupSchema'
import { z } from 'zod'


type SignUpFormData = z.infer<typeof signUpSchema>

export default function SignUpScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
  })

  const signupMutation = useSignup()

  const onSubmit = (data: SignUpFormData) => {
    signupMutation.mutate(data, {
      onSuccess: (user:any) => {
        console.log('SignUp successful:', user)
        
      },
      onError: (error:any) => {
        console.error('SignUp error:', error)
      }
    })
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Sign up' }} />
      <ScrollView backgroundColor="white">
        <YStack f={1} p="$4" gap="$4" mt="$6">
          <Text fontSize="$8" fontWeight="800" color="#313131">Create Account</Text>
          <Text color="#C67C4E">Join our community</Text>

          <Label>Name</Label>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#fff"
                borderColor={errors.name ? 'red' : '#E3E3E3'}
                value={value}
                onChangeText={onChange}
                placeholder="Enter your full name"
              />
            )}
          />
          {errors.name && <Text color="red">{errors.name.message}</Text>}

          <Label>Email</Label>
          <Controller
            control={control}
            name="email"
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
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#fff"
                borderColor={errors.password ? 'red' : '#E3E3E3'}
                value={value}
                onChangeText={onChange}
                placeholder="Enter password"
                secureTextEntry
              />
            )}
          />
          {errors.password && <Text color="red">{errors.password.message}</Text>}

          <Label>Confirm Password</Label>
          <Controller
            control={control}
            name="passwordConfirm"
            render={({ field: { onChange, value } }) => (
              <Input
                backgroundColor="#fff"
                borderColor={errors.passwordConfirm? 'red' : '#E3E3E3'}
                value={value}
                onChangeText={onChange}
                placeholder="Confirm your password"
                secureTextEntry
              />
            )}
          />
          {errors.passwordConfirm&& <Text color="red">{errors.passwordConfirm.message}</Text>}

          <Button
            theme="active"
            backgroundColor="#C67C4E"
            color="white"
            onPress={handleSubmit(onSubmit)}
          >
            {signupMutation.isPending ? <Spinner color="white" /> : 'Sign Up'}
          </Button>

          <Separator borderColor="#E3E3E3" />

          <Text ta="center" color="#313131">
            Already have an account?{' '}
            <Link href="/auth/login">
              <Text color="#C67C4E">Login</Text>
            </Link>
          </Text>
        </YStack>
      </ScrollView>
    </>
  )
}
