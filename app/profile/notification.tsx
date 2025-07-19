import { useState } from 'react'
import {
  YStack,
  XStack,
  Text,
  Switch,
  ScrollView,
  Separator,
  Label,
} from 'tamagui'
import { Main } from '~/tamagui.config'
import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'

export default function NotificationsScreen() {
  const [newArrivals, setNewArrivals] = useState(true)
  const [orderUpdates, setOrderUpdates] = useState(true)
  const [promotions, setPromotions] = useState(false)
  const [appUpdates, setAppUpdates] = useState(false)

  const settingBox = (
    label: string,
    description: string,
    value: boolean,
    setValue: (val: boolean) => void
  ) => (
    <YStack
      p="$4"
      borderRadius="$4"
      bg="$background"
      borderWidth={1}
      borderColor="#E3E3E3"
      gap="$2"
    >
      <XStack jc="space-between" ai="center">
        <YStack flex={1} pr="$3">
          <Text color="#313131" fontSize={16} fontWeight="600">
            {label}
          </Text>
          <Text color="#7A7A7A" fontSize={13} mt="$1">
            {description}
          </Text>
        </YStack>
        <Switch
          size="$3"
          checked={value}
          onCheckedChange={setValue}
          backgroundColor="#EDD6C8"
          thumbColor={value ? '#C67C4E' : '#E3E3E3'}
        />
      </XStack>
    </YStack>
  )

  return (
    <>
    <Stack.Screen options={{title:"Notifications Settings"}}/>
    <Main bg="$background" f={1}>
      <ScrollView px="$4" showsVerticalScrollIndicator={false}>
        <YStack pt="$6" pb="$10" gap="$4">
          <Text fontSize={22} fontWeight="700" color="#313131">
            Notifications
          </Text>

          {settingBox(
            'New Arrivals',
            'Get notified when new items drop or collections are released.',
            newArrivals,
            setNewArrivals
          )}

          {settingBox(
            'Order Updates',
            'Receive order confirmations, delivery updates and status changes.',
            orderUpdates,
            setOrderUpdates
          )}

          {settingBox(
            'Special Promotions',
            'Get notified about discounts, flash sales, and promo codes.',
            promotions,
            setPromotions
          )}

          {settingBox(
            'App Updates',
            'Be informed about new features or important app notices.',
            appUpdates,
            setAppUpdates
          )}
        </YStack>
      </ScrollView>
    </Main>
    </>
  )
}
