import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, Image, TextInput, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import DialogModal from '../components/DialogModal';
import { Text, TextBold } from '../components/Themed';

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
        statusOnline: true,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 1,
      type: 'group',
      newMessagesCount: 10,
      user: {
        statusOnline: true,
        id: 1,
        nickname: 'Чат соседей д4',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю2',
        timeForUser: '23:49',
      }
    },
    {
      id: 2,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 3,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 4,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 5,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 6,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 7,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 8,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 9,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 10,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 11,
      user: {
        id: 0,
        statusOnline: false,
        firstName: 'Георгий',
        lastName: 'Норий',
        miniature: require('../assets/images/avatar.png')
      },
      lastMessage: {
        text: 'Прости, опаздываю',
        timeForUser: '23:49',
      }
    },
    {
      id: 12,
      user: {
        id: 0,
        statusOnline: false,
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
          {
            item.type == 'group' ?
              <View style={styles.groupPhoto}>
                <Image
                  source={item.user.miniature ? item.user.miniature : require('../assets/images/avatar.png')}
                  style={[styles.dialogPhoto, styles.dialogPhoto1]}
                />
                <Image
                  source={item.user.miniature ? item.user.miniature : require('../assets/images/avatar.png')}
                  style={[styles.dialogPhoto, styles.dialogPhoto2]}
                />
                {item.user.statusOnline && <View style={[styles.statusOnline, styles.statusOnlineGroup]} />}
              </View>
              : <>
                <Image
                  source={item.user.miniature ? item.user.miniature : require('../assets/images/avatar.png')}
                  style={styles.dialogPhoto}
                />
                {item.user.statusOnline && <View style={styles.statusOnline} />}
              </>
          }
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
                <LinearGradient
                  colors={[Colors.button.backgroundColor, Colors.button.backgroundColor2]}
                  start={[0, 1]}
                  end={[1, 0]}
                  style={styles.numNew}>
                  <TextBold style={styles.numNewText}>{item.newMessagesCount}</TextBold>
                </LinearGradient>
              </View>
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>

  return <View style={styles.background}>
    <ImageBackground style={styles.header} source={require('../assets/images/background-header.png')} >
      <TextBold style={styles.headerTitle}>Чаты</TextBold>
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
        <TouchableOpacity onPress={() => setCategory(0)} style={[styles.tab, category === 0 && styles.tabActive]}><TextBold style={styles.tabText}>Важное</TextBold></TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory(1)} style={[styles.tab, category === 1 && styles.tabActive]}><TextBold style={styles.tabText}>Общие</TextBold></TouchableOpacity>
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
    paddingBottom: 60,
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  header: {
    paddingTop: 70,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
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
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 20,
    backgroundColor: Colors.iconColor
  },
  numNewText: {
    fontSize: 12,
    color: '#fff',
  },
  groupPhoto: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center'
  },
  dialogPhoto1: {
    width: 40,
    top: -2,
    height: 40
  },
  dialogPhoto2: {
    marginLeft: -45,
    right: -5,
    top: 12,
    width: 40,
    height: 40
  },
  dialogPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
    backgroundColor: Colors.background,
    marginRight: 15
  },
  statusOnline: {
    width: 15,
    height: 15,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: 'white',
    backgroundColor: '#48E23B',
    position: 'absolute',
    zIndex: 9999,
    bottom: -2,
    right: 10,
  },
  statusOnlineGroup: {
    bottom: -13,
    right: 10,
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
