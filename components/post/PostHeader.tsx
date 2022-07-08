import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function PostHeader(props: any) {
  const { item } = props;

  return <View style={styles.header}>
    <View style={styles.headerLeft}>
      <Image source={item.image} style={styles.avatarImage} />
    </View>
    <View style={styles.headerCenter}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subText}><Ionicons name="location-outline" color={Colors.iconColor} /> {item.city}</Text>
        <Text style={styles.subText}>{item.date}</Text>
      </View>
      <View style={styles.headerRight}>
        <View><Ionicons name="ellipsis-vertical-sharp" color="#999" size={25} /></View>
        <View><Text style={styles.subCategory}>{item.category}</Text></View>
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
    paddingBottom: 10,
    paddingHorizontal: 15,
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
  headerRight: {
    flexDirection: 'column',
    alignSelf: 'center',
    textAlign: 'right',
    alignItems: 'flex-end'
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  subText: {
    color: '#999',
    fontSize: 12
  },
  subCategory: {
    color: Colors.activeText,
    marginTop: 5,
    fontSize: 13
  },
  avatarImage: {
    width: 45,
    height: 45
  }
});
