import React, { useEffect, useState, memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default memo(function PostFooter(props: any) {
  const { item } = props;
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  return <View style={styles.footer}>
    <View style={styles.footerLeft}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => setLike(!like)} style={styles.box}>
        <Ionicons name={like ? "heart" : "heart-outline"} color={like ? Colors.likeActive : Colors.like} size={25} />
        <Text style={styles.boxText}>{item.likesCount}</Text>
      </TouchableOpacity>
      <View style={styles.box}>
        <Ionicons name="chatbox-outline" color="#444" size={25} />
        <Text style={styles.boxText}>{item.commentsCount}</Text>
      </View>
    </View>
    <TouchableOpacity activeOpacity={0.8} onPress={() => setBookmark(!bookmark)}>
      <Ionicons name={bookmark ? "bookmark" : "bookmark-outline"} color={bookmark ? Colors.bookmarkActive : Colors.bookmark} size={25} />
    </TouchableOpacity>
  </View>
});

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 15,
    paddingTop: 10,
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
