import { View, Text, Button, YStack, XStack, ScrollView, Separator } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams,router} from 'expo-router';
import { Alert, Image, Pressable } from 'react-native';
import {useState,useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { phones } from '~/assets/Data/Data';
import { Container } from '~/tamagui.config';
import { useCartStore } from '~/store/useCartStore';
import { useFavouriteStore } from '~/store/useFavouritesStore';
import { PhoneDetails } from '~/types/phone';

const ProductDetail = () => {
  
  
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = phones.find((phone) => phone.id === id);
 const [isFav, setIsFav] = useState(useFavouriteStore.getState().isFavourite(id));

useEffect(() => {
  const unsubscribe = useFavouriteStore.subscribe((state) => {
    setIsFav(state.isFavourite(id));
  });
  return () => unsubscribe();
}, [id]);

 function handleAddCart(item: PhoneDetails) {
  useCartStore.getState().addItem({
    id: item.id.toString(),
    image: item.image,
    quantity: 1,
    name: item.name,
    price: item.price,
    brand: item.brand,
  });
  
  router.push('/(tabs)/cart');
}


  if (!item) {
    return (
      <SafeAreaView>
        <Text>Product not found.</Text>
      </SafeAreaView>
    );
  }

  const { name, image, brand, price, specs } = item;

  return (
    <>
      <Stack.Screen
        options={{
          title: name,
          headerRight: () => (
            <Pressable
              onPress={() => {
                useFavouriteStore.getState().toggleFavourite({
                  id: item.id,
                  image: item.image,
                  name: item.name,
                  brand: item.brand,
                  price: item.price,
                })
                useFavouriteStore.getState().isFavourite(id)}
              }
              style={{ marginRight: 15 }}
            >
              <Ionicons
                name={isFav? 'heart' : 'heart-outline'}
                size={30}
                color="#000"
              />
            </Pressable>
          ),
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <ScrollView bg="white" f={1} p="$2">
          <YStack gap="$4">
            <Image
              source={image}
              style={{ width: '100%', height: 400, borderRadius: 16 }}
              resizeMode="contain"
            />
            <YStack gap="$1">
              <Text fontSize="$9" fontWeight="800">
                {name}
              </Text>
              <Text fontSize="$5" color="$gray10">
                {brand}
              </Text>
            </YStack>

            <XStack ai="center">
              <Container flexDirection='row'>
              <Text fontSize="$8">⭐4.8</Text>
              <Text color="$gray10" fontSize="$5" mt="$4">
                {' '}
                (1524)
              </Text>
              </Container>
              <Button icon={<Ionicons name='cart' size={24}/>} bg={"#EDD6c8"} onPress={()=>handleAddCart(item)} >
              Add to cart</Button>
            </XStack>
          </YStack>

          <Separator
            borderWidth={2}
            borderColor="#ccc"
            marginVertical="$4"
            width="90%"
            alignSelf="center"
          />

          <YStack gap={1} pb="$10">
            <Text fontSize="$9" fontWeight="700">
              Details :
            </Text>
            <Text color="$gray10" fontSize="$5" mt="$6">
              Premium build quality. All-day battery. Advanced camera system.
            </Text>

            <Text fontSize="$9" fontWeight="700" mt="$7">
              Specs
            </Text>

            {specs && (
              <YStack mt="$2" gap="$3">
                {Object.entries(specs).map(([section, details]) => (
                  <YStack key={section}>
                    
                    <Text fontSize="$6" fontWeight="600">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Text>
                     <Separator />
                    {Object.entries(details).map(([key, value]) => (
                     
                      <XStack key={key} gap={"$2"}>
                        <Text color="$gray10">{key}:</Text>
                        <Text>{value}</Text>
                      </XStack>
                    ))}
                  </YStack>
                ))}
              </YStack>
            )}
          </YStack>
        </ScrollView>

        <XStack
          pos="sticky"
          h="$9"
          p="$4"
          alignItems="center"
          justifyContent="space-between"
          borderTopLeftRadius="$8"
          borderTopRightRadius="$8"
          bg="white"
        >
          <YStack>
            <Text fontSize="$5" color="$gray10">
              Price
            </Text>
            <Text fontSize="$8" color="#C67C4E">
              $ {price}
            </Text>
          </YStack>
          
          <Button size="$6" w="60%" bg="#C67C4E" color="white" onPress={()=>router.push({
          pathname: "/checktout/checkoutItem",
          params: {
            id: item.id,
            quantity: 1,
          },
        })}>
            Buy now
            
          </Button>
          
        </XStack>
      </SafeAreaView>
    </>
  );
};

export default ProductDetail;
