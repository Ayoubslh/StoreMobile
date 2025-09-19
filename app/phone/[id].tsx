import { useEffect, useState } from "react";
import { Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  Button,
  YStack,
  XStack,
  ScrollView,
  Separator,
  Card,
} from "tamagui";

import { useGetItem } from "~/apis/items/getItem";
import { useCartStore } from "~/store/useCartStore";
import { useFavouriteStore } from "~/store/useFavouritesStore";
import { PhoneDetails } from "~/types/phone";

// 🔹 Mock reviews (swap with API later)
const reviews = [
  {
    name: "Samius Mikao",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    date: "July 28, 2025",
    comment:
      "Absolutely love this store! The phone arrived in perfect condition and earlier than expected. Will definitely shop again.",
    rating: 5,
  },
  {
    name: "Lina Bouzid",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    date: "July 22, 2025",
    comment:
      "Customer service was responsive and helpful. I had an issue with my payment and they resolved it quickly.",
    rating: 4,
  },
];

const ProductDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: item, isLoading, error } = useGetItem(id ?? "");
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(useFavouriteStore.getState().isFavourite(id ?? ""));
    const unsubscribe = useFavouriteStore.subscribe((state) => {
      setIsFav(state.isFavourite(id ?? ""));
    });
    return () => unsubscribe();
  }, [id]);

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error || !item) {
    return (
      <SafeAreaView>
        <Text>Error loading product.</Text>
      </SafeAreaView>
    );
  }

  const product: PhoneDetails = item;

  const handleAddCart = () => {
    useCartStore.getState().addItem(product);
    router.push("/(tabs)/cart");
  };

  const formatValue = (val: any) => {
    if (val === true) return "Yes";
    if (val === false) return "No";
    if (typeof val === "object" && val !== null) {
      // Flatten nested objects into a readable line
      return Object.entries(val)
        .filter(([, v]) => v !== undefined && v !== null && v !== "")
        .map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`)
        .join(" • ");
    }
    return String(val);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: product.name,
          headerRight: () => (
            <Pressable
              onPress={() => useFavouriteStore.getState().toggleFavourite(product)}
              style={{ marginRight: 15 }}
            >
              <Ionicons
                name={isFav ? "heart" : "heart-outline"}
                size={28}
                color="#000"
              />
            </Pressable>
          ),
        }}
      />

      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <ScrollView bg="white" f={1} p="$3">
          {/* Image */}
          <Image
            source={{ uri: product.image }}
            style={{ width: "100%", height: 350, borderRadius: 16 }}
            resizeMode="contain"
          />

          {/* Details */}
          <YStack mt="$4" gap="$2">
            <Text fontSize="$9" fontWeight="800">
              {product.name}
            </Text>
            <Text fontSize="$5" color="$gray10">
              {product.brand}
            </Text>
            {!!product.description && (
              <Text fontSize="$5" color="$gray10">
                {product.description}
              </Text>
            )}

            <Text fontSize="$8" color="#C67C4E" mt="$2">
              $ {product.price}
            </Text>
            <Text color="$gray10" fontSize="$5">
              {product.ratingQuantity} reviews | ⭐{" "}
              {Number(product.averageRatings ?? 0).toFixed(1)} / 5
            </Text>

            <XStack gap="$3" mt="$3">
              <Button flex={1} bg="#EDD6C8" onPress={handleAddCart}>
                Add to Cart
              </Button>
              <Button
                flex={1}
                bg="#C67C4E"
                color="white"
                onPress={() =>
                  router.push({
                    pathname: "/checktout/checkoutItem", // keep your route
                    params: { id: product._id, quantity: "1" },
                  })
                }
              >
                Buy Now
              </Button>
            </XStack>
          </YStack>

          {/* ---- Specifications (no tabs) ---- */}
          <YStack mt="$6" gap="$3">
            <Text fontSize="$8" fontWeight="700">
              Specifications
            </Text>

            {product.specs ? (
              Object.entries(product.specs).map(([section, data]) => {
                if (!data) return null;
                const entries = Object.entries(data as Record<string, any>).filter(
                  ([, v]) => v !== undefined && v !== null && v !== ""
                );
                if (!entries.length) return null;

                return (
                  <Card key={section} p="$3">
                    <Text fontSize="$6" fontWeight="600" mb="$2">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Text>
                    <Separator mb="$2" />
                    <YStack gap="$1">
                      {entries.map(([key, val]) => (
                        <XStack key={key} gap="$2" ai="flex-start">
                          <Text color="$gray10" fontSize="$4" w={120}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </Text>
                          <Text fontSize="$4" f={1}>{formatValue(val)}</Text>
                        </XStack>
                      ))}
                    </YStack>
                  </Card>
                );
              })
            ) : (
              <Text color="$gray10">No specifications available.</Text>
            )}
          </YStack>

          {/* ---- Reviews (no tabs) ---- */}
          <YStack mt="$6" gap="$3" mb="$8">
            <Text fontSize="$8" fontWeight="700">
              Reviews
            </Text>

            {reviews.map((rev, i) => (
              <Card key={i} p="$3">
                <XStack ai="center" gap="$3">
                  <Image
                    source={{ uri: rev.avatarUrl }}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                  />
                  <YStack>
                    <Text fontWeight="600">{rev.name}</Text>
                    <Text color="$gray10" fontSize="$3">
                      {rev.date}
                    </Text>
                  </YStack>
                </XStack>
                <Text mt="$2">{rev.comment}</Text>
                <Text mt="$1">⭐ {rev.rating}/5</Text>
              </Card>
            ))}
          </YStack>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
