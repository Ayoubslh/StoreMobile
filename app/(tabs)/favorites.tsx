
import { Tabs } from 'expo-router';
import FavoritesScreen from '~/components/screens/favouritesScreen';

export default function Home() {
  return (
    <>
    <Tabs.Screen options={{title:"Favourites"}}/>
     <FavoritesScreen/>
    </>
  );
}

