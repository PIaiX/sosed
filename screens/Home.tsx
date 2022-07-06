import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home(props: any) {
  const navigation = useNavigation();

  useEffect(() => {

  }, [])

  return <>
    <LinearGradient
      colors={['#C697FF', '#B2B5FF']}
      start={[0.1, 0.1]}
      end={[1, 1]}
      style={styles.header}>
      <View style={styles.tabs}>
        <View style={styles.tab}><Text style={styles.tabText}>Город</Text></View>
        <View style={styles.tab}><Text style={styles.tabText}>Район</Text></View>
        <View style={styles.tab}><Text style={styles.tabText}>Дом</Text></View>
      </View>
    </LinearGradient>
    <View style={styles.container}>
      <Text>Тест</Text>
    </View>
  </>
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  header: {
    backgroundColor: '#C697FF',
    padding: 15,
    paddingTop: 70,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  }
});
