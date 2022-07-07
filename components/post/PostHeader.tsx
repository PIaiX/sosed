import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostHeader(props: any) {
  const { item } = props;

  return <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Image source={item.image} style={styles.avatarImage} />
    </View>
    <View style={styles.headerCenter}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subText}>{item.city}</Text>
        <Text style={styles.subText}>{item.date}</Text>
      </View>
      <View>
        <Ionicons name="ellipsis-vertical-sharp" color="#999" size={25} />
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    paddingRight: 10
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  subText: {
    color: '#999',
    fontSize: 12
  },
  avatarImage: {
    width: 45,
    height: 45
  }
});
