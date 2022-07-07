import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

export default function PostDefault(props: any) {
  const { item } = props;

  return <View style={styles.container}>
    <PostHeader item={item} />
    {item.text && item.text.length > 0 && <View><Text style={styles.text}>{item.text}</Text></View>}
    {item.media && <View><Image style={styles.media} source={item.media} /></View>}
    <PostFooter item={item} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  media: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden'
  },
  text: {
    color: '#404040'
  }
});
