import React, { useEffect, useState, memo } from 'react';
import { View, Image, Modal, TouchableOpacity, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import OptionsMenu from '../OptionsMenu';
import { Text, TextBold } from '../../components/Themed';

export default memo(function PostHeader(props: any) {
  const { item } = props;
  const [show, setShow] = useState(false);
  var options = [];
  if (item.type == 2) {
    options = [
      { title: 'Отменить голос', type: 'active', icon: 'ban', typeIcon: 'SimpleLineIcons', onOptionPress: () => console.log('тест') },
      { title: 'Скопировать ссылку', icon: 'copy-outline', onOptionPress: () => console.log('тест') },
      { title: 'Скрыть публикацию', icon: 'eye-off-outline' },
      { title: 'Пожаловаться', type: 'delete', icon: 'alert-circle-outline', onPress: '' }
    ]
  } else {
    options = [
      { title: 'Скопировать ссылку', icon: 'copy-outline', onOptionPress: () => console.log('тест') },
      { title: 'Скрыть публикацию', icon: 'eye-off-outline' },
      { title: 'Пожаловаться', type: 'delete', icon: 'alert-circle-outline', onPress: '' }
    ]
  }

  return <>
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image source={item.image} style={styles.avatarImage} />
      </View>
      <View style={styles.headerCenter}>
        <View>
          <TextBold style={styles.name}>{item.name}</TextBold>
          <Text style={styles.subText}><Ionicons name="location-outline" color={Colors.iconColor} /> {item.city}</Text>
          <Text style={styles.subText}>{item.date}</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => setShow(!show)}>
            <Ionicons name="ellipsis-vertical-sharp" color="#999" size={25} />
          </TouchableOpacity>
          <View><Text style={styles.subCategory}>{item.category}</Text></View>
        </View>
      </View>
    </View>
    <OptionsMenu show={show} type="top" data={options} onClose={(item: any) => setShow(!show)} />
  </>
});

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
    fontSize: 16,
  },
  subText: {
    color: '#999',
    fontSize: 14
  },
  subCategory: {
    color: Colors.activeText,
    marginTop: 5,
    fontSize: 14
  },
  avatarImage: {
    width: 45,
    height: 45
  },
});
