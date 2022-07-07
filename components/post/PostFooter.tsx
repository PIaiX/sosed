import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostFooter(props: any) {
  const { item } = props;

  return <View style={styles.footer}>
    <View style={styles.footerLeft}>
      <View style={styles.box}>
        <Ionicons name="heart-outline" color="#444" size={28} />
        <Text style={styles.boxText}>{item.likesCount}</Text>
      </View>
      <View style={styles.box}>
        <Ionicons name="chatbox-outline" color="#444" size={28} />
        <Text style={styles.boxText}>{item.commentsCount}</Text>
      </View>
    </View>
    <View>
      <Ionicons name="bookmark-outline" color="#444" size={28} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 15
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  boxText: {
    color: '#444',
    paddingLeft: 4
  },
  footerRight: {
    paddingRight: 10
  },
});
