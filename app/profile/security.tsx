import { useState } from 'react'
import {
  Button,
  Input,
  ScrollView,
  Text,
  YStack,
  Label,
  Switch,
  XStack,
} from 'tamagui'
import { Main } from '~/tamagui.config'
import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'

const SecurityScreen = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [twoFA, setTwoFA] = useState(false)

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match.')
      return
    }

    console.log('Password updated', { oldPassword, newPassword })
    alert('Password successfully updated!')
  }

  return (
    <Main bg="$background" f={1} >
        <Stack.Screen options={{title:"Security"}}/>
      <ScrollView px="$4" pt="$6" pb="$10" showsVerticalScrollIndicator={false}>
        <YStack gap="$5" >
          <Text fontSize="$7" fontWeight="700" color="#313131">
            Security Settings
          </Text>

          {/* Change Password */}
          <YStack gap="$3">
            <Text fontSize="$6" fontWeight="600" color="#313131">
              Update Password
            </Text>

            <YStack gap="$2">
              <Label>Old Password</Label>
              <Input
                secureTextEntry
                value={oldPassword}
                onChangeText={setOldPassword}
                placeholder="Enter old password"
                borderColor="#C67C4E"
              />
              <Label>New Password</Label>
              <Input
                secureTextEntry
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter new password"
                borderColor="#C67C4E"
              />
              <Label>Confirm New Password</Label>
              <Input
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm new password"
                borderColor="#C67C4E"
              />
            </YStack>

            <Button
              mt="$2"
              bg="#C67C4E"
              color="white"
              borderRadius="$4"
              onPress={handlePasswordChange}
            >
              Save New Password
            </Button>

            <Button
              mt="$2"
              bg="#EDD6C8"
              borderRadius="$4"
              icon={<Ionicons name="lock-open-outline" size={18} color="#313131" />}
              color="#313131"
              onPress={() => alert('Forgot password flow')}
            >
              Forgot Password
            </Button>
          </YStack>

          {/* Two-Factor Auth Toggle */}
          <YStack mt="$6" gap="$2">
            <Text fontSize="$6" fontWeight="600" color="#313131">
              Two-Factor Authentication
            </Text>
            <XStack ai="center" jc="space-between">
              <Text color="#313131">Enable 2FA for extra protection</Text>
              <Switch
                checked={twoFA}
                onCheckedChange={setTwoFA}
                backgroundColor={twoFA ? '#C67C4E' : '#E3E3E3'}
              />
            </XStack>
          </YStack>

          {/* Security Tips */}
          <YStack mt="$6" gap="$2" pb="$20">
            <Text fontSize="$6" fontWeight="600" color="#313131">
              Security Tips
            </Text>
            <Text>- Use a unique password for your account</Text>
            <Text>- Never share your password with anyone</Text>
            <Text>- Enable 2FA for additional security</Text>
            <Text>- Change passwords regularly</Text>
          </YStack>
        </YStack>
      </ScrollView>
    </Main>
  )
}

export default SecurityScreen
