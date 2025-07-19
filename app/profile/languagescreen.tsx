// screens/Language.tsx
import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';

export default function Language() {
  const [selected, setSelected] = useState('en');

  return (
    <>
     <Stack.Screen options={{ title: 'Language Settings' }} />
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#313131' }}>Language</Text>

      {['en', 'fr', 'ar'].map((lang) => (
        <Pressable
          key={lang}
          onPress={() => setSelected(lang)}
          style={{
            marginTop: 20,
            padding: 12,
            borderRadius: 8,
            backgroundColor: selected === lang ? '#C67C4E' : '#E3E3E3',
          }}
        >
          <Text style={{ color: selected === lang ? '#fff' : '#313131' }}>
            {lang === 'en' ? 'English' : lang === 'fr' ? 'Français' : 'العربية'}
          </Text>
        </Pressable>
      ))}
    </View>
    </>
  );
}
