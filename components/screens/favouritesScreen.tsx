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
import { useState, useEffect } from "react"
import { Alert } from "react-native"
import { useCartStore } from "~/store/useCartStore"
import { useFavouriteStore } from "~/store/useFavouritesStore"


export default function FavoritesScreen() {
  const favorites = useFavouriteStore((state) => state.items);
  const [favourite, setFavourite] = useState(() =>
    favorites.map((item) => ({ ...item, selected: true }))
  );
  useEffect(() => {
    setFavourite((prev) => {
      const updated = favorites.map((item) => {
        const prevItem = prev.find((p) => p._id === item._id);
        return {
          ...item,
          selected: prevItem ? prevItem.selected : true,
        };
      });
      return updated;
    });
  }, [favorites]);
  return (
    <ScrollView p="$4">
      <YStack gap="$4">
        {favorites.map((item) => (
          <Link key={item._id} href={`/phone/${item._id}`} asChild>
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
                      onPress={() => useCartStore.getState().addItem({
                        id: item._id.toString(),
                        image: item.image,
                        quantity: 1,
                        name: item.name,
                        price: item.price,
                        brand: item.brand,
                      })}
                      
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
                      onPress={() => {
                        useFavouriteStore.getState().toggleFavourite(item);
                        Alert.alert("Removed from favorites");
                      }}
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
