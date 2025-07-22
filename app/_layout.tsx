import React, { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';

import config from '~/tamagui.config';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

   const [queryClient] = useState(() => new QueryClient())

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
     <QueryClientProvider client={queryClient}>
    <TamaguiProvider config={config}>
      
       <Theme name={"light"}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="phone/[id]" options={{presentation:'card'}}/>
         <Stack.Screen name="auth/login" options={{presentation:'card'}}/>
          <Stack.Screen name="auth/signup" options={{presentation:'card'}}/>
        
         
      </Stack>
      </Theme>
      
     
    </TamaguiProvider>
    </QueryClientProvider>
    
  );
}
