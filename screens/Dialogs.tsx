import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import PostDefault from '../components/post/PostDefault';
import PostAd from '../components/post/PostAd';
import PostQuiz from '../components/post/PostQuiz';
import DialogModal from '../components/DialogModal';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window')

export default function Dialogs(props: any) {
  const navigation: any = useNavigation();
  const [category, setCategory] = useState(0);

  const [show, setShow] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [dialogs, setDialogs] = useState([
    {
      id: 0,
      newMessagesCount: 10,
      user: {
        id: 0,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
  ]);

  useEffect(() => {

  }, [])

  const Item = ({ item }: any) => <View key={item.id}>
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Chat', item)}
      style={styles.itemBox}>
      <View style={styles.item}>
        <View>
          <Image
            source={item.user.miniature ? item.user.miniature : require('../assets/images/avatar.png')}
            style={styles.dialogPhoto}
          />
        </View>
        <View style={styles.borderBottom}>
          <View style={styles.dialogNameBox}>
            <View>
              <Text style={styles.dialogName}>{item.user.firstName && item.user.lastName ? item.user.firstName + ' ' + item.user.lastName : item.user.nickname}</Text>
            </View>
            <View style={styles.dialogNameBoxRight}>
              {item.lastMessage && item.lastMessage.isViewed ? <Ionicons name="checkmark-done-sharp" size={18} color={Colors.activeText} /> : <Ionicons name="checkmark-sharp" size={18} color={Colors.activeText} />}
              <Text style={styles.dialogNameBoxRightTime}>{item.lastMessage && item.lastMessage.timeForUser ? item.lastMessage.timeForUser : '00:00'}</Text>
            </View>
          </View>
          <View style={styles.dialogNameBox}>
            {item.lastMessage && item.lastMessage.text.length > 0 &&
              <View>
                <Text style={styles.dialogSubTitle}>{item.lastMessage.text}</Text>
              </View>
            }
            {item.newMessagesCount && item.newMessagesCount > 0 &&
              <View style={styles.dialogNameBoxRight}>
                <Text style={styles.numNew}>{item.newMessagesCount}</Text>
              </View>
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>

  return <View style={styles.background}>
    <ImageBackground style={styles.header} source={require('../assets/images/background-header.png')} >
      <Text style={styles.headerTitle}>Чаты</Text>
      <View style={styles.search}>
        <View style={styles.searchBox}>
          <Ionicons style={styles.searchIcon} name="search-outline" size={20} color="rgba(255,255,255,0.8)" />
          <TextInput style={styles.searchInput} maxLength={250} placeholderTextColor="rgba(255,255,255,0.8)" placeholder="Поиск" value={searchText} onChangeText={(text) => setSearchText(text)} />
        </View>
        <View style={styles.searchBox2}>
          <TouchableOpacity onPress={() => setShow(true)}><Ionicons name="settings-outline" size={25} color="white" /></TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setCategory(0)} style={[styles.tab, category === 0 && styles.tabActive]}><Text style={styles.tabText}>Важное</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory(1)} style={[styles.tab, category === 1 && styles.tabActive]}><Text style={styles.tabText}>Общие</Text></TouchableOpacity>
      </View>
    </ImageBackground>
    <View style={styles.container}>
      {
        <FlatList
          data={dialogs}
          renderItem={Item}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
    <DialogModal
      show={show}
      setShow={(e: boolean) => setShow(e)}
      text="Вы точно хотите покинуть группу Чат соседей и удалить ее?"
      buttons={[
        { text: 'Отмена', onPress: () => setShow(!show) },
        { text: 'Покинуть беседу', color: 'red', onPress: () => setShow(!show) }
      ]} />
  </View>
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 60,
  },
  content: {
    paddingHorizontal: 15,
  },
  header: {
    paddingTop: 70,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tab: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent'
  },
  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#7A24E7'
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBox: {
    flex: 1,
  },
  searchBox2: {
    paddingLeft: 15
  },
  searchInput: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.4)',
    color: "#fff",
    fontSize: 16,
    borderRadius: 40,
    paddingVertical: 8,
    paddingHorizontal: 15,
    paddingLeft: 45
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 11
  },



  itemBox: {
    flex: 1,
    paddingVertical: 6,
    paddingLeft: 15,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dialogNameBox: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  dialogNameBoxRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    paddingRight: 15,
  },
  dialogNameBoxRightTime: {
    fontSize: 13,
    color: '#999',
    marginLeft: 5
  },
  numNew: {
    paddingVertical: 2,
    paddingHorizontal: 7,
    fontSize: 12,
    color: '#fff',
    borderRadius: 20,
    backgroundColor: Colors.iconColor
  },
  dialogPhoto: {
    width: 50,
    height: 50,
    borderRadius: 15,
    resizeMode: 'cover',
    backgroundColor: Colors.background,
    marginRight: 15
  },
  borderBottom: {
    paddingBottom: 12,
    flex: 1,
  },
  dialogName: {
    fontSize: 17,
    marginBottom: 4
  },
  dialogSubTitle: {
    fontSize: 14,
    color: '#999'
  },
});
