import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import ProfileScreen from '~/components/screens/profile';
import GuestProfileScreen from '~/components/screens/guest';

const Page = () => {
  const isLogged=true
  return (
    <>
         <Stack.Screen options={{ title: 'Profile' }} />
         {isLogged?<ProfileScreen/>:<GuestProfileScreen/>}
        
    </>
  )
}

export default Page