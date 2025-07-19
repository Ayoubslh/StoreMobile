// components/CustomTabBar.tsx

import { Ionicons } from '@expo/vector-icons'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { View, Text } from 'tamagui'
import { Pressable } from 'react-native'
import React, { useState } from 'react'
import ParticleBurst from './ParticleBurst'
import { SafeAreaView } from 'react-native-safe-area-context'

const tabs = [
  { name: 'home', label: 'Home', icon: 'home-outline' },
  { name: 'favorites', label: 'Favorites', icon: 'heart-outline' },
  { name: 'cart', label: 'Cart', icon: 'cart-outline' },
  { name: 'orders', label: 'Orders', icon: 'bag-outline' },
  { name: 'profile', label: 'Profile', icon: 'person-outline'},
]

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  
  const [activeBurst, setActiveBurst] = useState<number | null>(null)

  const handlePress = (index: number, name: string) => {
    if (state.index !== index) {
      setActiveBurst(index)
      navigation.navigate(`${name}` as never)
      setTimeout(() => setActiveBurst(null), 500)
    }
  }

  return (
    <SafeAreaView edges={['bottom']} >   
     <View
      bg="$background"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      py="$2"
      borderTopWidth={1}
      borderColor="$gray6"
    >
      {tabs.map((tab, index) => {
        const isFocused = state.index === index

        return (
          <Pressable
            key={tab.name}
            onPress={() => handlePress(index, tab.name)}
            style={{ alignItems: 'center', flex: 1 }}
          >
            <View position="relative" alignItems="center">
              <Ionicons
                name={tab.icon as any}
                size={24}
                color={isFocused ? '#C67C4E' : '#999'}
              />
              {activeBurst === index && <ParticleBurst trigger />}
            </View>
            <Text fontSize="$2" mt="$1" color={isFocused ? '#C67C4E' : '$gray8'}>
              {tab.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
    </SafeAreaView>

  )
}
