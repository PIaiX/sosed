import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

export default function PostQuiz(props: any) {
  const { item } = props;

  return <View style={styles.container}>
    <PostHeader item={item} />
    {item.text && item.text.length > 0 && <View><Text style={styles.text}>{item.text}</Text></View>}
    {item.media && <View><Image style={styles.media} source={item.media} /></View>}
    <View style={styles.quiz}>
      <Text style={styles.quizTitle}></Text>
      <Text style={styles.quizType}></Text>
      <View style={styles.quizList}>
        <View style={styles.quizListItem}>
          <View style={styles.quizListItemRadio}></View>
          <View style={styles.quizListItemText}><Text>Текст варианта</Text></View>
        </View>
        <View style={styles.quizListItem}>
          <View style={styles.quizListItemRadio}></View>
          <View style={styles.quizListItemText}><Text>Текст варианта</Text></View>
        </View>
      </View>
    </View>
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
