import { Ionicons } from "@expo/vector-icons"
import {
  YStack,
  XStack,
  ScrollView,
  Text,
  Image,
  Card,
  CardHeader,
  CardFooter,
  Button,
} from "tamagui"
import { Link } from "expo-router"

const favorites = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    image: require("./../../assets/phones/iphone15promax.jpeg"),
    price: 255,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    image: require("./../../assets/phones/sgu24.jpeg"),
    price: 240,
  },
]

export default function FavoritesScreen() {
  return (
    <ScrollView p="$4">
      <YStack gap="$4">
        {favorites.map((item) => (
          <Link key={item.id} href={`/phone/${item.id}`} asChild>
            <Card elevate size="$4" width="100%" height={120} p="$3" borderRadius="$8">
              <XStack f={1} space="$3">
                <Image
                  source={item.image}
                  width={100}
                  height="100%"
                  borderRadius="$6"
                  resizeMethod="resize"
                />

                <YStack f={1} justifyContent="space-between">
                  <YStack>
                    <Text fontWeight="700" fontSize="$5" numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text fontWeight="600" color="#a7a5a5ff" fontSize="$2">
                      {item.brand}
                    </Text>
                  </YStack>

                  <XStack justifyContent="space-between" alignItems="center">
                    <Text fontSize="$5" fontWeight="700">
                      ${item.price}
                    </Text>
                    <XStack>
                    <Button
                    icon={<Ionicons name="cart-outline" size={18} color="white" />}
                     
                      width={40}
                      height={40}
                      padding={0}
                      
                      bg="#C67C4E"
                      borderRadius={12}
                      justifyContent="center"
                      alignItems="center"
                      pressStyle={{ opacity: 0.8 }}
                      color={"white"}
                      
                    />
                    <Button
                      icon={<Ionicons name="heart" size={18} color="white" />}
                      width={40}
                      height={40}
                      padding={0}
                      bg="#C67C4E"
                      borderRadius={12}
                      justifyContent="center"
                      alignItems="center"
                      pressStyle={{ opacity: 0.8 }}
                    />
                    </XStack>
                  </XStack>
                </YStack>
              </XStack>
            </Card>
          </Link>
        ))}
      </YStack>
    </ScrollView>
  )
}
