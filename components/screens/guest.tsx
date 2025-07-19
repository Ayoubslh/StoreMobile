import {
  Button,
  Image,
  ScrollView,
  Text,
  XStack,
  YStack,
  View,
  Separator
} from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import { Main } from '~/tamagui.config'
import { router } from 'expo-router'

type GuestOptionProps = {
  label: string
  icon: keyof typeof Ionicons.glyphMap
  onPress?: () => void
}

const GuestProfileScreen = () => {
  return (
    <Main bg="$background" f={1}>
      <ScrollView showsVerticalScrollIndicator={false} pb="$1.5">
        <YStack pb="$5">
         
          <YStack
            bg="#EDD6C8"
            height={200}
            alignItems="center"
            justifyContent="center"
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
          >
            <Image
              bg={"gray"}
              width={100}
              height={100}
              borderRadius={50}
              borderWidth={2}
              borderColor="white"
            />
            <Text mt="$2" fontWeight="700" fontSize="$6" color="#333">
              Guest User
            </Text>
            <YStack mt="$2" gap="$2" flexDirection="row">
              <Button
                backgroundColor="#C67C4E"
                color="white"
                borderRadius={8}
                onPress={() => router.push('/auth/login')}
              >
                Log In
              </Button>
              <Button
                backgroundColor="#333"
                color="white"
                borderRadius={8}
                onPress={() => router.push('/auth/signup')}
              >
                Sign Up
              </Button>
            </YStack>
          </YStack>

          {/* Options */}
          <YStack mt="$4" px="$5" gap="$2">
            <GuestOption
              label="Language"
              icon="language-outline"
              onPress={() => router.push('/profile/languagescreen')}
            />
            <GuestOption
              label="Support"
              icon="help-circle-outline"
              onPress={() => router.push('/profile/support')}
            />
            <GuestOption
              label="About the App"
              icon="information-circle-outline"
              onPress={() => router.push('/profile/about')}
            />
          </YStack>
        </YStack>
      </ScrollView>
    </Main>
  )
}

const GuestOption = ({ label, icon, onPress }: GuestOptionProps) => (
  <Button
    unstyled
    pressStyle={{ opacity: 0.8 }}
    onPress={onPress}
    padding="$3"
    borderRadius="$4"
    width="100%"
  >
    <XStack ai="center" space="$2">
      <Ionicons name={icon} size={22} color="#C67C4E" />
      <Text color="#000" fontSize="$5">{label}</Text>
    </XStack>
  </Button>
)

export default GuestProfileScreen
