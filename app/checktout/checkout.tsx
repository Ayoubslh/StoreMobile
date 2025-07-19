import { useLocalSearchParams ,Stack} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, YStack, XStack, Text, Button, Separator } from "tamagui";
import { Image } from "react-native";
import { phones } from "~/assets/Data/Data";

export default function CheckoutScreen() {
  const { items } = useLocalSearchParams();

 

  const parsedItems = items ? JSON.parse(items) : [];

  const cartItems = parsedItems
    .map(({ id, quantity }) => {
      const product = phones.find((p) => p.id === Number(id));
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
        <Stack.Screen options={{ title: 'Checkout' }} />
    <SafeAreaView style={{flex:1}}>

    <ScrollView p="$4" >
      <Text fontSize="$7" fontWeight="700" mb="$2">
        Order Summary
      </Text>

      <YStack gap="$3"  >
        {cartItems.map((item: any) => (
          <XStack
            key={item.id}
            jc="space-between"
            ai="center"
            p="$2"
            borderRadius="$4"
            backgroundColor="#F4F4F4"
          >
            <Image
              source={item.image}
              
              style={{borderRadius:12,width:100,height:100}}
              resizeMode="contain"
            />
            <YStack f={1} ml="$3" >
              <Text fontWeight="700">{item.name}</Text>
              <Text color="#666">Qty: {item.quantity}</Text>
            </YStack>
            <Text fontWeight="700">
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </XStack>
        ))}
      </YStack>

      <XStack jc="space-between" mt="$4">
        <Text fontSize="$6" fontWeight="700">
          Total:
        </Text>
        <Text fontSize="$6" fontWeight="700">
          ${total.toFixed(2)}
        </Text>
      </XStack>
 {/* Shipping Info */}
      <Text mt="$6" fontSize="$6" fontWeight="700">
        Shipping Info
      </Text>
        <Separator borderColor="#E3E3E3" my="$3" />
      <YStack mt="$2" gap="$1">
        <Text>Name: Ayoub Salhi</Text>
        <Text>Phone: +213 6xx xxx xxx</Text>
        <Text>Address: Rue de la République, Alger</Text>
        <Text>City: Alger</Text>
        <Text>Postal Code: 16000</Text>
        <Text>Country: Algeria</Text>
      </YStack>

      {/* Billing Info */}
      <Text mt="$5" fontSize="$6" fontWeight="700">
        Billing Info
      </Text>
       <Separator borderColor="#E3E3E3" my="$3" />
      <YStack mt="$2" gap="$1">
        <Text>Email: ayoub@example.com</Text>
        <Text>Billing Address: Rue de la République, Alger</Text>
        <Text>Tax ID: DZ000123456</Text>
        <Text>VAT Status: Included</Text>
        <Text>Company Name: AyoubTech SARL</Text>
      </YStack>

      {/* Payment Method */}
      <Text mt="$5" fontSize="$6" fontWeight="700">
        Payment Method
      </Text>
        <Separator borderColor="#E3E3E3" my="$3" />
      <YStack mt="$2" gap="$1" pb={"$10"}>
        <Text>Method: Cash on Delivery</Text>
        <Text>Status: Payment upon delivery</Text>
        <Text>Estimated Total: {total} $</Text>
        <Text>Order Number: #ORD20250719-324</Text>
      </YStack>
   
    </ScrollView>
       <XStack
          pos="sticky"
          h="$9"
          p="$4"
          alignItems="center"
          justifyContent="center"
       
          bg="white"
        >
      

      <Button
      
        bg="#C67C4E"
        color="white"
        size="$4"
        height={"90%"}
        width={"90%"}
        borderRadius="$6"
        pressStyle={{ opacity: 0.85 }}
        onPress={() => alert("Order confirmed")}
      >
        Confirm Order
      </Button>
      </XStack>
      </SafeAreaView>
    </>
  );
}
