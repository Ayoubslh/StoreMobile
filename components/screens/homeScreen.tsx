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
} from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { Container, Main, Title } from '~/tamagui.config';
import { FlatList, Pressable } from 'react-native';
import { useState } from 'react';

import P1 from './../../assets/phones/p1.jpeg';
import Pcard from '../uis/Pcard';
import { phones } from '~/assets/Data/Data';
const categories = [
  { id: '1', name: 'Phones' },
  { id: '2', name: 'Earphones' },
  { id: '3', name: 'Laptops' },
  { id: '4', name: 'Smartwatches' },
  { id: '5', name: 'Accessories' },
];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<string | null>('1');

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

        <YStack p="$4">
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
                    mt="$15"
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
        <YStack mt="$4" p="$2" flexWrap="wrap" justifyContent="space-between" bg="$background">
          <XStack flexWrap="wrap" justifyContent="space-around">
            {phones.map((item) => (
              <Pcard item={item} key={item.id} />
            ))}
          </XStack>
        </YStack>
      </ScrollView>
    </Main>
  );
}
