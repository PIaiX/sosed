import React, { useEffect, useState, memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

export default memo(function PostDefault(props: any) {
  const { item } = props;

  return <View style={styles.container}>
    <PostHeader item={item} />
    <View style={styles.content}>
      {item.text && item.text.length > 0 && <View><Text style={styles.text}>{item.text}</Text></View>}
      {item.media && <View><Image style={styles.media} source={item.media} /></View>}
    </View>
    <PostFooter item={item} />
  </View>
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: 15
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
