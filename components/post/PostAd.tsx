import React, { useEffect, useState, memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../Button';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

export default memo(function PostAd(props: any) {
  const navigation: any = useNavigation();
  const { item } = props;

  return <View style={styles.container}>
    <PostHeader item={item} />
    <View style={styles.content}>
      {item.text && item.text.length > 0 && <View><Text style={styles.text}>{item.text}</Text></View>}
      {item.media && <View><Image style={styles.media} source={item.media} /></View>}
      <View style={styles.ad}>
        <View style={styles.adHeader}>
          <View>
            <Image style={styles.adImage} source={require('../../assets/images/ad.png')} />
          </View>
          <View style={styles.adHeaderRight}>
            <Text style={styles.adHeaderRightTitle}>{item.adTitle}</Text>
            <Button title="Оставить заявку" icon="arrow-forward-outline" onPress={() => navigation.navigate('PostAdScreen', item)} iconSize={20} />
          </View>
        </View>
        <View style={styles.adContent}>
          <View style={styles.adAdmin}>
            <View style={styles.adAdminImages}>
              <Image source={item.image} style={styles.adminImage} />
              <Image source={item.image} style={[styles.adminImage, styles.adminImage2]} />
            </View>
            <View style={styles.adAdminText}>
              <Text style={styles.bold}>Организаторы:</Text>
              <Text>Джон майкл и Амина Герц</Text>
            </View>
          </View>
          <View>
            <Text style={styles.adListText}><Ionicons name="time-outline" size={15} color={Colors.activeText} /> 31 декабря 2021 в 20:00</Text>
            <Text style={styles.adListText}><Ionicons name="location-outline" size={15} color={Colors.activeText} /> Высотная улица, 1</Text>
            <Text style={styles.adListText}><Ionicons name="people-outline" size={15} color={Colors.activeText} /> 350 мест</Text>
          </View>
        </View>
      </View>
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
  },
  ad: {
    borderWidth: 1,
    borderColor: '#6A2BA9',
    borderRadius: 8,
    padding: 12
  },
  adHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  adImage: {
    maxWidth: 100,
    borderRadius: 10
  },
  adHeaderRight: {
    flexDirection: 'column',
    paddingLeft: 20,
    flex: 1,
    alignItems: 'flex-start'
  },
  adHeaderRightTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5
  },
  bold: {
    fontWeight: 'bold'
  },
  adAdmin: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  adAdminImages: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  adminImage: {
    width: 40,
    height: 40,
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: '#fff',
    zIndex: 2
  },
  adminImage2: {
    marginLeft: -18,
    zIndex: 0
  },
  adListText: {
    marginTop: 5,
    color: '#999'
  }
});
