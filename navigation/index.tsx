import React, { useEffect, useState } from 'react';
import { useColorScheme, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const config = {
  screens: {
    Chat: 'feed/:sort',
    Profile: 'user',
  },
};

const linking = {
  prefixes: ['https://mychat.com', 'mychat://'],
  config,
};
export default function Navigation() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      linking={linking}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarIconStyle: { marginTop: 4 },
        tabBarLabelStyle: { fontSize: 13, color: '#7A24E7', paddingBottom: 3 },
        tabBarStyle: { height: 55, position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4, borderTopWidth: 0 },
        unmountOnBlur: true,
        tabBarShowLabel: true,
        headerShadowVisible: false,
        headerShown: true,
        headerTransparent: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: '',
          tabBarLabel: 'Новости',
          headerLeft: () => <View style={{ padding: 10 }}><Ionicons name="menu-outline" size={30} /></View>,
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/home-active.png')
              :
              colorScheme == 'dark' ?
                require('../assets/images/home-white.png')
                :
                require('../assets/images/home-noactive.png')} style={{ width: 23, height: 23 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home2"
        component={Home}
        options={({ navigation }) => ({
          title: 'Online',
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/home-active.png')
              :
              colorScheme == 'dark' ?
                require('../assets/images/home-white.png')
                :
                require('../assets/images/home-noactive.png')} style={{ width: 23, height: 23 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home3"
        component={Home}
        options={({ navigation }) => ({
          title: 'Online',
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/home-active.png')
              :
              colorScheme == 'dark' ?
                require('../assets/images/home-white.png')
                :
                require('../assets/images/home-noactive.png')} style={{ width: 23, height: 23 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home4"
        component={Home}
        options={({ navigation }) => ({
          title: 'Online',
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/home-active.png')
              :
              colorScheme == 'dark' ?
                require('../assets/images/home-white.png')
                :
                require('../assets/images/home-noactive.png')} style={{ width: 23, height: 23 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home5"
        component={Home}
        options={({ navigation }) => ({
          title: 'Online',
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/home-active.png')
              :
              colorScheme == 'dark' ?
                require('../assets/images/home-white.png')
                :
                require('../assets/images/home-noactive.png')} style={{ width: 23, height: 23 }} resizeMode="contain" />,
        })}
      />
    </BottomTab.Navigator>
  );
}