import { useState, useEffect } from 'react'
import {
  Button,
  Input,
  ScrollView,
  Text,
  YStack,
  XStack,
  Image,
  Label,
  Separator
} from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { Main } from '~/tamagui.config'
import { Stack } from 'expo-router'

const EditProfileScreen = () => {
  const [image, setImage] = useState<string | null>(null)

  // General Profile Info
  const [name, setName] = useState('Ayoub Salhi')
  const [email, setEmail] = useState('ayoub@example.com')
  const [phone, setPhone] = useState('+213 6xx xxx xxx')
  const [address, setAddress] = useState('Rue de la République, Alger')

  // Shipping Info
  const [shippingName, setShippingName] = useState('Ayoub Salhi')
  const [shippingPhone, setShippingPhone] = useState('+213 6xx xxx xxx')
  const [shippingAddress, setShippingAddress] = useState('Rue de la République, Alger')

  // Billing Info
  const [billingEmail, setBillingEmail] = useState('ayoub@example.com')
  const [billingAddress, setBillingAddress] = useState('Same as shipping')

  // Card Info State
const [cardNumber, setCardNumber] = useState('**** **** **** 1234')
const [expiryDate, setExpiryDate] = useState('12/26')
const [cvc, setCvc] = useState('***')


  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync()
      if (status !== 'granted') {
        alert('Camera permission is required to upload a profile picture.')
      }
    })()
  }, [])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <Main bg="$background" f={1}>
      <Stack.Screen options={{title:"Profile Settings"}}/>
      <ScrollView px="$4" showsVerticalScrollIndicator={false}>
        <YStack pt="$6" gap="$5" pb="$10">
          {/* Profile Picture */}
          <YStack ai="center" gap="$3">
            {image ? (
              <Image
                source={{ uri: image }}
                width={200}
                height={200}
                borderRadius={100}
                borderColor="white"
                borderWidth={2}
              />
            ) : (
              <YStack
                width={200}
                height={200}
                borderRadius={999}
                backgroundColor="#E3E3E3"
                ai="center"
                jc="center"
              >
                <Text color="#313131">No Photo</Text>
              </YStack>
            )}
            <XStack gap="$2">
              <Button
                icon={<Ionicons name="image-outline" size={24} color="white" />}
                onPress={pickImage}
                bg="#C67C4E"
                size="$5"
                borderRadius="$4"
              >
                Choose
              </Button>
              <Button
                icon={<Ionicons name="camera-outline" size={24} color="#313131" />}
                onPress={takePhoto}
                bg="#EDD6C8"
                size="$5"
                borderRadius="$4"
                color="#313131"
              >
                Camera
              </Button>
            </XStack>
          </YStack>

          {/* Editable Profile Info */}
          <YStack gap="$4">
            <YStack>
              <Label>Name</Label>
              <Input value={name} onChangeText={setName} borderColor="#C67C4E" />
            </YStack>

            <YStack>
              <Label>Email</Label>
              <Input value={email} onChangeText={setEmail} borderColor="#C67C4E" />
            </YStack>

            <YStack>
              <Label>Phone</Label>
              <Input value={phone} onChangeText={setPhone} borderColor="#C67C4E" />
            </YStack>

            <YStack>
              <Label>Address</Label>
              <Input value={address} onChangeText={setAddress} borderColor="#C67C4E" />
            </YStack>
          </YStack>

          <Separator mt="$6" mb="$2" />

          {/* Shipping Info */}
          <Text fontSize="$6" fontWeight="700" color="#313131">
            Shipping Info
          </Text>
          <YStack mt="$2" gap="$3">
            <YStack>
              <Label>Name</Label>
              <Input
                value={shippingName}
                onChangeText={setShippingName}
                borderColor="#C67C4E"
              />
            </YStack>
            <YStack>
              <Label>Phone</Label>
              <Input
                value={shippingPhone}
                onChangeText={setShippingPhone}
                borderColor="#C67C4E"
              />
            </YStack>
            <YStack>
              <Label>Address</Label>
              <Input
                value={shippingAddress}
                onChangeText={setShippingAddress}
                borderColor="#C67C4E"
              />
            </YStack>
          </YStack>

          {/* Billing Info */}
          <Text mt="$5" fontSize="$6" fontWeight="700" color="#313131">
            Billing Info
          </Text>
          <YStack mt="$2" gap="$3">
            <YStack>
              <Label>Email</Label>
              <Input
                value={billingEmail}
                onChangeText={setBillingEmail}
                borderColor="#C67C4E"
              />
            </YStack>
            <YStack>
              <Label>Billing Address</Label>
              <Input
                value={billingAddress}
                onChangeText={setBillingAddress}
                borderColor="#C67C4E"
              />
            </YStack>
          </YStack>

          {/* Payment Method */}
          <Text mt="$5" fontSize="$6" fontWeight="700" color="#313131">
  Payment Method
</Text>

<YStack mt="$2" gap="$3">
  <YStack>
    <Label>Card Number</Label>
    <Input
      value={cardNumber}
      onChangeText={setCardNumber}
      placeholder="**** **** **** 1234"
      keyboardType="numeric"
      borderColor="#C67C4E"
    />
  </YStack>

  <XStack gap="$3">
    <YStack flex={1}>
      <Label>Expiry</Label>
      <Input
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="MM/YY"
        keyboardType="numeric"
        borderColor="#C67C4E"
      />
    </YStack>

    <YStack flex={1}>
      <Label>CVC</Label>
      <Input
        value={cvc}
        onChangeText={setCvc}
        placeholder="***"
        keyboardType="numeric"
        borderColor="#C67C4E"
      />
    </YStack>
  </XStack>
</YStack>

          {/* Save Button */}
          <Button
            mt="$6"
            bg="#C67C4E"
            color="white"
            size="$4"
            borderRadius="$4"
            pressStyle={{ opacity: 0.9 }}
            onPress={() => {
              console.log('Profile Updated', {
                name,
                email,
                address,
                shippingName,
                shippingPhone,
                shippingAddress,
                billingEmail,
                billingAddress
              })
              alert('Profile updated successfully')
            }}
          >
            Save Changes
          </Button>
        </YStack>
      </ScrollView>
    </Main>
  )
}

export default EditProfileScreen
