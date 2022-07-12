import React, { useEffect, useState } from 'react';
import { useColorScheme, Image, View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Dialogs from '../screens/Dialogs';
import Chat from '../screens/Chat';

import PostAdScreen from '../screens/post/PostAdScreen';

import { StatusBar } from 'expo-status-bar';

export default function Navigation() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style='light' />
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
  const navigation: any = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'fade',
        }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="Dialogs" component={Dialogs} options={{
          title: '',
          headerTintColor: '#fff',
          headerBackTitle: 'назад',
          headerTransparent: true,
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="Chat" component={Chat} options={{
          title: '',
          headerTintColor: '#fff',
          headerBackTitle: 'назад',
          headerTransparent: true,
          headerShadowVisible: false,
        }} />
        <Stack.Screen name="PostAdScreen" component={PostAdScreen} options={{
          title: '',
          headerTintColor: '#fff',
          headerBackTitle: 'назад',
          headerTransparent: true,
          headerShadowVisible: false,
        }} />
      </Stack.Group>
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
        tabBarLabelStyle: { fontSize: 14, color: '#999', fontFamily: 'calibri', paddingBottom: 3 },
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
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/home-active.png')
              :
              require('../assets/images/home.png')} style={{ width: 32, height: 32 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home2"
        component={Home}
        options={({ navigation }) => ({
          title: '',
          tabBarLabel: 'Сервисы',
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/service-active.png')
              :
              require('../assets/images/service.png')} style={{ width: 25, height: 25 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home3"
        component={Home}
        options={({ navigation }) => ({
          title: '',
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={require('../assets/images/add.png')} style={{ bottom: 5, width: 55, height: 55 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home4"
        component={Home}
        options={({ navigation }) => ({
          title: 'Бонусы',
          tabBarLabel: 'Бонусы',
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/points-active.png')
              :
              require('../assets/images/points.png')} style={{ width: 25, height: 25 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home5"
        component={Home}
        options={({ navigation }) => ({
          title: 'Карта',
          tabBarLabel: 'Карта',
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={
            focused ?
              require('../assets/images/map-active.png')
              :
              require('../assets/images/map.png')} style={{ width: 23, height: 23 }} resizeMode="contain" />,
        })}
      />
    </BottomTab.Navigator>
  );
}