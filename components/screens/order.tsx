import { Ionicons } from "@expo/vector-icons";
import {
  YStack,
  XStack,
  Text,
  Card,
  ScrollView,
  View,
  Separator,
  Image,
  Button
} from "tamagui";
import { phones } from "~/assets/Data/Data";

const orders = [
  {
    id: 101,
    date: "2025-07-18",
    items: [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 2 },
    ],
    status: "delivered",
  },
  {
    id: 102,
    date: "2025-07-15",
    items: [{ id: 3, quantity: 1 }],
    status: "processing",
  },
];



const statusColor = {
  delivered: "#4CAF50",
  processing: "#FFC107",
  cancelled: "#F44336",
};


const statusIcon = {
  delivered: "checkmark-done",
  processing: "time-outline",
  cancelled: "close-circle",
};

export default function OrderScreen() {
  
  return (
    <YStack f={1} bg="#fff">
      <ScrollView
        p="$4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <YStack gap="$4">
          {orders.map((order) => (
            <Card
              key={order.id}
              p="$3"
              borderRadius="$6"
              backgroundColor="#fdfdfd"
              borderColor="#ddd"
              borderWidth={1}
              gap="$2"
            >
              <XStack jc="space-between" ai="center">
                <Text fontWeight="700" fontSize="$6">
                  Order #{order.id}
                </Text>
                <XStack ai="center" gap="$2">
                  <Ionicons
                    name={statusIcon[order.status]} 
                    size={16}
                    color={statusColor[order.status]} 
                  />
                  <Text color={statusColor[order.status]} fontWeight="600">
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </Text>
                </XStack>
              </XStack>

              <Separator />
              <YStack gap="$3">
  {order.items.map((orderItem, index) => {
    const product = phones.find((p) => p.id === orderItem.id);
    if (!product) return null;

    return (
      <Card key={index}  size="$4" width="100%" height={120} p="$3" borderRadius="$8">
        <XStack f={1} space="$3">
          <Image
            source={product.image}
            width={100}
            height="100%"
            borderRadius="$6"
            resizeMethod="resize"
          />

          <YStack f={1} justifyContent="space-between">
            <YStack>
              <Text fontWeight="700" fontSize="$5" numberOfLines={1}>
                {product.name}
              </Text>
              <Text fontWeight="600" color="#a7a5a5ff" fontSize="$2">
                {product.brand}
              </Text>
              <Text fontSize="$3" color="#777">Qty: {orderItem.quantity}</Text>
            </YStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Text fontSize="$5" fontWeight="700">
                ${(product.price * orderItem.quantity).toFixed(2)}
              </Text>
             
            </XStack>
          </YStack>
        </XStack>
      </Card>
    );
  })}
</YStack>


              <Separator />

              <XStack jc="space-between" ai="center">
                <Text color="#999">Date: {order.date}</Text>
                <Text fontWeight="700">
  $
  {order.items.reduce((sum, item) => {
    const product = phones.find((p) => p.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0).toFixed(2)}
</Text>
              </XStack>
            </Card>
          ))}
        </YStack>
      </ScrollView>
    </YStack>
  );
}
