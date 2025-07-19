import { YStack, Input, Text, Button, Label, ScrollView, Separator, } from 'tamagui'
import { useForm, Controller } from 'react-hook-form'
import { Link,Stack } from 'expo-router'

export default function SignUpScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log('SignUp Data:', data)
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

        <Label>Confirm Password</Label>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <Input
              backgroundColor="#fff"
              borderColor={errors.confirmPassword ? 'red' : '#E3E3E3'}
              value={value}
              onChangeText={onChange}
              placeholder="Confirm password"
              secureTextEntry
            />
          )}
        />

        <Button theme="active" backgroundColor="#C67C4E" color="white" onPress={handleSubmit(onSubmit)}>
          Sign Up
        </Button>

        <Separator borderColor="#E3E3E3" />

        <Text ta="center" color="#313131">
          Already have an account? <Link href={'/auth/login'}><Text color="#C67C4E">Login</Text></Link>
        </Text>
      </YStack>
    </ScrollView>
   </>
  )
}
