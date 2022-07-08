import React, { useEffect, useState } from 'react';
import { useColorScheme, Image, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Dialogs from '../screens/Dialogs';

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
  const navigation: any = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          animationTypeForReplace: 'push',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{
          title: '',
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
          headerLeft: () => <View><Image fadeDuration={0} style={{ width: 28 }} resizeMode="contain" source={require('../assets/images/menu.png')} /></View>,
          headerRight: () => <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Dialogs')}><Image fadeDuration={0} style={{ width: 30 }} resizeMode="contain" source={require('../assets/images/dialogs.png')} /></TouchableOpacity>,
        }} />
        <Stack.Screen name="Dialogs" component={Dialogs} options={{
          title: '',
          headerTintColor: '#fff',
          headerBackTitle: 'назад',
          headerShown: true,
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
        tabBarLabelStyle: { fontSize: 12, color: '#999', paddingBottom: 3 },
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
          title: 'Сервисы',
          headerShadowVisible: false,
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
          title: 'Добавить',
          headerShadowVisible: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused, color }) => <Image fadeDuration={0} source={require('../assets/images/add.png')} style={{ bottom: 5, width: 55, height: 55 }} resizeMode="contain" />,
        })}
      />
      <BottomTab.Screen
        name="Home4"
        component={Home}
        options={({ navigation }) => ({
          title: 'Бонусы',
          headerShadowVisible: false,
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
          headerShadowVisible: false,
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