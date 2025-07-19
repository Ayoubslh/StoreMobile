import {
  Button,
  Image,
  ScrollView,
  Text,
  XStack,
  YStack,
  View,
  H4,
  Separator
} from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { Main } from '~/tamagui.config';
import { router } from 'expo-router';

type ProfileOptionProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

const ProfileScreen = () => {
  return (
    <Main bg="$background" f={1} >
      <ScrollView showsVerticalScrollIndicator={false} pb={"$1.5"}>
        <YStack pb={"$5"}>
         
          <YStack
            bg="#EDD6C8"
            height={200}
            alignItems="center"
            justifyContent="center"
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
          >
            <Image
              source={require("../../assets/PP.jpg")}
              width={100}
              height={100}
              borderRadius={50}
              borderWidth={2}
              borderColor="white"
            />
            <Text mt="$2" fontWeight="700" fontSize="$6" color="#333">
              Noah Flynn
            </Text>
            <YStack
              mt="$2"
              px="$3"
              py="$1"
              bg="#C67C4E"
              borderRadius={8}
            >
              <Text color="white" fontSize="$2">
                noahflynnnn@gmail.com
              </Text>
            </YStack>
          </YStack>

         
          <YStack mt="$10" px="$5" gap="$2">
           
           

<ProfileOption
  label="Profile Settings"
  icon="settings-outline"
  onPress={() => router.push('/profile/profilesettings')}
/>
<ProfileOption
  label="Security"
  icon="shield-outline"
  onPress={() => router.push('/profile/security')}
/>
<ProfileOption
  label="Notifications"
  icon="notifications-outline"
  onPress={() => router.push('/profile/notification')}
/>



<ProfileOption
  label="Language"
  icon="language-outline"
  onPress={() => router.push('/profile/languagescreen')}
/>

<ProfileOption
  label="Support"
  icon="help-circle-outline"
  onPress={() => router.push('/profile/support')}
/>
<ProfileOption
  label="Log Out"
  icon="log-out-outline"
  onPress={() => {
   
    console.log('Logged out');
    router.navigate('/auth/login')
  }}
/>
          </YStack>
        </YStack>
      </ScrollView>
    </Main>
  );
};

export const ProfileOption = ({ label, icon, onPress }: ProfileOptionProps) => (
  <Button
   borderColor="#C67C4E"
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
);

export default ProfileScreen;
