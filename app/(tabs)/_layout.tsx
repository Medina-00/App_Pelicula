import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
          tabBarStyle: {backgroundColor: 'black',margin:3},
          tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', color: 'white',fontFamily: 'Times New Roman'},
       
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Personajes"
        options={{
          title: 'Personajes',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'people-circle' : 'people-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SobreMi"
        options={{
          title: 'SobreMi',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AcercaDe"
        options={{
          title: 'Acerca',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information-circle-sharp' : 'information-circle-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Momentos"
        options={{
          title: 'Momentos',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'videocam': 'videocam-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="EnVida"
        options={{
          title: 'EnVida',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-circle': 'person-circle-sharp'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
