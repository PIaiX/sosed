import React, { useEffect, useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function PostHeader(props: any) {
  const { item } = props;
  const [show, setShow] = useState(false);

  return <>
    <View style={styles.header}>
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
          <TouchableOpacity activeOpacity={0.8} onPress={() => setShow(!show)}>
            <Ionicons name="ellipsis-vertical-sharp" color="#999" size={25} />
          </TouchableOpacity>
          <View><Text style={styles.subCategory}>{item.category}</Text></View>
        </View>
      </View>
    </View>
    <Modal
      transparent={true}
      animationType="slide"
      visible={show}
      onRequestClose={() => setShow(!show)}
    >
      <Pressable style={styles.menuFon} onPress={() => setShow(!show)}>
        <View style={styles.menuBox}>
          <TouchableOpacity activeOpacity={0.7} style={styles.link}>
            <Ionicons name="copy-outline" size={22} style={styles.icon} />
            <Text style={styles.linkText}>Скопировать ссылку</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.link}>
            <Ionicons name="eye-off-outline" size={22} style={styles.icon} />
            <Text style={styles.linkText}>Скрыть публикацию</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.link}>
            <Ionicons name="alert-circle-outline" size={22} style={styles.reportIcon} />
            <Text style={styles.reportText}>Пожаловаться</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  </>
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
  },
  modal: {
    flex: 1,
    borderBottomColor: '#fff',
  },
  menuFon: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuBox: {
    backgroundColor: 'white',
    width: '100%',
    maxHeight: '50%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 2,
    padding: 12
  },

  link: {
    padding: 10,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkText: {
    fontSize: 16,
  },
  reportText: {
    color: '#f93a54'
  },
  icon: {
    marginRight: 10,
    color: Colors.text
  },
  reportIcon: {
    marginRight: 10,
    color: '#f93a54'
  }
});
