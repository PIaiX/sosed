import React, { useEffect, useState, memo } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import { Text } from '../../components/Themed';
import PostContent from './PostContent';

export default memo(function PostDefault(props: any) {
  const { item } = props;

  return <View style={styles.container}>
    <PostHeader item={item} />
    <PostContent item={item} />
    <PostFooter item={item} />
  </View>
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
