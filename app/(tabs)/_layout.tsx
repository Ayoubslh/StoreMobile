import { Link, Tabs } from 'expo-router';
import CustomTabBar from '~/components/CustomBar';
import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown:false
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          
        
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favourite',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            headerShown:true
        
        }}
      />
       <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            headerShown:true
         
        }}
      />
       <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerShown:true
        
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
            headerShown:true
        
        }}
      />
    </Tabs>
  );
}
