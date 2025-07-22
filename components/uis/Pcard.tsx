import { Ionicons } from "@expo/vector-icons"
import { Card, CardHeader ,YStack,Image,Text ,CardFooter, XStack, Section, ButtonIcon, Button} from "tamagui"
import { Link, useRouter } from 'expo-router'
import { Item } from "~/types/Item"
import { useCartStore } from "~/store/useCartStore"
import { useState } from "react"







const Pcard = ({item}:{item :Item}) => {
  const [isAdded, setAdded] = useState(false);
 
  return (
  <Link href={`/phone/${item.id}`} asChild>
     <Card elevate size="$4" width={160} height={230} p="$2" borderRadius="$8" mb="$4"   >
      <YStack f={1} >
        <CardHeader padding={0}>
          <Image
            source={ {uri:item.image}}
            width="100%"
            height={120}
            borderRadius="$4"
          
          />
        </CardHeader>

        <Text fontWeight="600" fontSize="$4" numberOfLines={1}>
          {item.name}
        </Text>
         <Text fontWeight="600" color="#a7a5a5ff" fontSize="$2">
          {item.brand}
        </Text>

        <CardFooter padding={0}>
            <XStack justifyContent="space-between" width={"100%"} alignItems="center">
          <Text  fontSize="$5" fontWeight="700">
            ${item.price}
          </Text>
       <Button
  icon={ isAdded?<Ionicons name="checkmark-circle-outline" size={24} color="white" />:<Ionicons name="add" size={18} color="white" />}
  width={40}
  height={40}
  padding={0}
  bg="#C67C4E"
  borderRadius={12}
  justifyContent="center"
  alignItems="center"
  pressStyle={{ opacity: 0.8 }}
  onPress={() => {useCartStore.getState().addItem({
    id: item.id.toString(),
    image: item.image,
    quantity: 1,
    name: item.name,
    price: item.price,
    brand: item.brand,
    }
  )
  setAdded(true);
}

  }
/>

          </XStack>
        </CardFooter>
      </YStack>
    </Card>
    </Link>


  )
}

export default Pcard