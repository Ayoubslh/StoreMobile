import {
  Card,
  Image,
  Input,
  Paragraph,
  ScrollView,
  Section,
  Spacer,
  Text,
  View,
  XStack,
  YStack,
  SizableText,
  Spinner,
   AnimatePresence,
   Button,
   Slider 
} from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { Container, Main, Title } from '~/tamagui.config';
import { FlatList, Pressable } from 'react-native';
import { use, useEffect, useState } from 'react';
import { useCartStore } from '~/store/useCartStore';



import P1 from './../../assets/phones/p1.jpeg';
import Pcard from '../uis/Pcard';
import { useGetAllItems } from '~/apis/items/getAllItems';
const categories = [
  { id: '1', name: 'Phones' },
  { id: '2', name: 'Earphones' },
  { id: '3', name: 'Laptops' },
  { id: '4', name: 'Smartwatches' },
  { id: '5', name: 'Accessories' },
];


export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<string | null>('1');
  const [showFilters, setShowFilters] = useState(false)
   // local state for inputs


 

  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    name: '',
    minPrice: undefined,
    maxPrice: undefined,
  });
 const { data: phones,isLoading ,error } = useGetAllItems(filters);
 const [tempFilters, setTempFilters] = useState(filters);



  return (
    <Main bg="$background" f={1}>
      <ScrollView>
        <YStack
          bg="#131212ff"
          height={400}
          $sm={{ height: 300 }}
          justifyContent="center"
          alignItems="center"
          pos="fixed">
          <Title color="white">TechStore</Title>

          <XStack alignItems="center" mt="$3" px="$3" w="100%">
            <XStack alignItems="center" bg="#242323ff" borderRadius={12} px="$2" py="$1" f={1}>
              <Ionicons name="search" size={24} color="#ccc" />
              <Input
                f={1}
                size="$6"
                placeholder="Search"
                placeholderTextColor="white"
                bg="#242323ff"
                borderColor="#242323ff"
                color="white"
                borderRadius="$8"
                $sm={{ size: '$4' }}
                onChangeText={(text) => setFilters({ ...filters, name: text })}
                value={filters.name}
              />
            </XStack>

           <Section
  bg="#C67C4E"
  borderRadius={16}
  h="$6"
  w="$6"
  ml="$4"
  ai="center"
  jc="center"
  p="$2"
  onPress={() => setShowFilters((prev) => !prev)}  // ✅ Add this line
  $sm={{ h: '$4', w: '$4', ml: '$2', p: '$a' }}>
  <Ionicons name="options" size={24} color="#fff" />
</Section>


          </XStack>

          <YStack
            pos="absolute"
            bottom={'$-13'}
            $sm={{ bottom: '$-12' }}
            zi={10}
            w="90%"
            ai="center"
            alignSelf="center"
            br="$6"
            overflow="hidden"
            bg="#a87453"
            shadowColor="#000"
            shadowOpacity={0.15}
            shadowRadius={12}
            mt="$20">
            <Image source={P1} width="100%" height={200} $sm={{ height: 150 }} />
            <YStack p="$4" pos="absolute" top={0} left={0} r={0} b={0} jc="center">
              <Text fontSize="$2" fontWeight="600" color="white" bg="red" br="$2" px="$2" mb="$2">
                Promo
              </Text>
              <Text fontSize="$6" color="white" fontWeight="bold">
                Buy one get one FREE
              </Text>
            </YStack>
          </YStack>
        </YStack>

        
       <YStack p="$4" mt="$15" $sm={{ mt: '$-8' }}>
  {showFilters && (
    <YStack
      key="filters"
      space="$4"
      mt="$4"
      mb="$4"
      p="$4"
      borderRadius="$4"
      backgroundColor="#f0f0f0"
      enterStyle={{ opacity: 0, y: -10 }}
      exitStyle={{ opacity: 0, y: -10 }}
      animation="quick"
    >
      {/* Brand Filter */}
      <Input
        placeholder="Brand"
        value={tempFilters.brand}
        onChangeText={(text) => setTempFilters({ ...tempFilters, brand: text })}
      />

      {/* Price Filter */}
      <YStack>
        <XStack jc="space-between" mb="$2">
          <Text>Min Price: {tempFilters.minPrice || 0} DZD</Text>
          <Text>Max Price: {tempFilters.maxPrice || 1000} DZD</Text>
        </XStack>
        <Slider
          size="$1"
          width="100%"
          max={1000}
          step={10}
          defaultValue={[tempFilters.minPrice || 0, tempFilters.maxPrice || 1000]}
          onValueChange={(value) => setTempFilters({ ...tempFilters, minPrice: value[0], maxPrice: value[1] })}
        >
          <Slider.Track>
            <Slider.TrackActive />
          </Slider.Track>
          <Slider.Thumb circular index={0} />
          <Slider.Thumb circular index={1} />
        </Slider>
      </YStack>

      {/* Rating Filter */}
      <YStack>
        <XStack jc="space-between" mb="$2">
          <Text>Min Rating: {tempFilters.rating?.[0] || 0}</Text>
          <Text>Max Rating: {tempFilters.rating?.[1] || 5}</Text>
        </XStack>
        <Slider
          size="$1"
          width="100%"
          max={5}
          step={0.1}
          defaultValue={[tempFilters.rating?.[0] || 0, tempFilters.rating?.[1] || 5]}
          onValueChange={(value) => setTempFilters({ ...tempFilters, rating: value })}
        >
          <Slider.Track>
            <Slider.TrackActive />
          </Slider.Track>
          <Slider.Thumb circular index={0} />
          <Slider.Thumb circular index={1} />
        </Slider>
      </YStack>
      <Button
  onPress={() => setFilters(tempFilters)}
  mt="$4"
  backgroundColor="#C67C4E"
>
  Apply Filters
</Button>

    </YStack>
  )}

        
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              const isActive = item.id === activeCategory;

              return (
                <Pressable onPress={() => setActiveCategory(item.id)}>
                  <XStack
                    padding="$2"
                   
                    $sm={{ mt: '$14' }}
                    borderRadius="$4"
                    backgroundColor={isActive ? '#C67C4E' : '#E3E3E3'}
                    mr="$2"
                    ai="center"
                    jc="center"
                    height="$4">
                    <Text color={isActive ? '#fff' : '#000'} fontWeight="600">
                      {item.name}
                    </Text>
                  </XStack>
                </Pressable>
              );
            }}
          />
        </YStack>
        <AnimatePresence>
  
</AnimatePresence>

       {isLoading?<Spinner></Spinner>: <YStack mt="$4" p="$2" flexWrap="wrap" justifyContent="space-between" bg="$background">
          <XStack flexWrap="wrap" justifyContent="space-around" >
            {phones?.map((item) => (
              <Pcard key={item._id}  item={item}  />
            ))}
          </XStack>
        </YStack>}
      </ScrollView>
    </Main>
  );
}
