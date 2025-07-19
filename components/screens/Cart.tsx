import { Ionicons } from "@expo/vector-icons";
import {
  YStack,
  XStack,
  Text,
  Image,
  Card,
  CardHeader,
  CardFooter,
  Button,
  ScrollView,
  View,
} from "tamagui";
import { useState } from "react";
import { Dimensions } from "react-native";
import { Link,router} from 'expo-router'

const initialCartItems = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    image: require("./../../assets/phones/iphone15promax.jpeg"),
    price: 255,
    quantity: 1,
    selected: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    image: require("./../../assets/phones/sgu24.jpeg"),
    price: 240,
    quantity: 2,
    selected: true,
  },
];


export default function CartScreen() {
  const [cart, setCart] = useState(initialCartItems);

  const handleQuantityChange = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

 const total = cart.reduce(
  (sum, item) => item.selected ? sum + item.price * item.quantity : sum,
  0
);

  const toggleSelection = (id: number) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    )
  );
};


  return (
    <YStack f={1}>
      <ScrollView
        p="$4"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <Button
  onPress={() =>
    setCart((prev) =>
      prev.map((item) => ({ ...item, selected: !prev.every(i => i.selected) }))
    )
  }
>
  {cart.every(item => item.selected) ? "Deselect All" : "Select All"}
</Button>

        <YStack gap="$4">
          {cart.map((item) => (
  <Link key={item.id} href={`/phone/${item.id}`} asChild>  
  <Card
    
    size="$4"
    width="100%"
    height={140}
    p="$2"
    borderRadius="$8"
    borderWidth={2}
    borderColor={item.selected ? "#C67C4E" : "#E0E0E0"}
    backgroundColor={item.selected ? "#fffaf4" : "#f2f2f2"}
  >
    <XStack f={1} gap="$3" ai="center">
     
      <Button
        size="$2"
        circular
        onPress={() => toggleSelection(item.id)}
        bg={item.selected ? "#C67C4E" : "#ccc"}
        icon={
          <Ionicons
            name={item.selected ? "checkmark" : "ellipse-outline"}
            size={16}
            color="white"
          />
        }
      />

      <CardHeader padding={0}>
        <Image
          source={item.image}
          width={100}
          height={"100%"}
          borderRadius="$4"
          resizeMode="cover"
        />
      </CardHeader>

      <YStack f={1} jc="space-between">
        <Text fontWeight="700" fontSize="$5">
          {item.name}
        </Text>
        <Text color="#888">{item.brand}</Text>
        <XStack ai="center" jc="space-between">
          <Text fontSize="$5" fontWeight="700">
            ${item.price}
          </Text>
          <XStack ai="center" gap="$2">
            <Button
              onPress={() => handleQuantityChange(item.id, -1)}
              size="$2"
              circular
              bg="#EEE"
            >
              <Ionicons name="remove" size={16} />
            </Button>
            <Text fontWeight="700">{item.quantity}</Text>
            <Button
              onPress={() => handleQuantityChange(item.id, 1)}
              size="$2"
              circular
              bg="#EEE"
            >
              <Ionicons name="add" size={16} />
            </Button>
          </XStack>
        </XStack>
      </YStack>
    </XStack>
  </Card>
  </Link> 
))}

        </YStack>
      </ScrollView>

      
      <View
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        bg="white"
        borderTopWidth={1}
        borderColor="#ddd"
        padding="$4"
        zIndex={10}
      >
        <XStack jc="space-between" ai="center">
          <Text fontSize="$6" fontWeight="700">
            Total: ${total.toFixed(2)}
          </Text>
          <Button
            bg="#C67C4E"
            color="white"
            px="$5"
            borderRadius="$4"
            pressStyle={{ opacity: 0.85 }}
           onPress={() => {
  const selectedItems = cart
    .filter((item) => item.selected)
    .map(({ id, quantity }) => ({ id, quantity }));

  router.push({
    pathname: "/checktout/checkout",
    params: {
      items: JSON.stringify(selectedItems),
    },
  });
}}

          >
            Checkout
          </Button>
        </XStack>
      </View>
    </YStack>
  );
}
