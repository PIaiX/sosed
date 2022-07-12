import React, { useState, useRef, useEffect } from 'react';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput, Text, TouchableWithoutFeedback, Alert, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';
import OptionsMenu from '../components/OptionsMenu';
import DialogModal from '../components/DialogModal';

export default function Chat({ route }: any) {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [dialogs, setDialogs] = useState(route.params ? route.params : false);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState<any>([
    {
      id: 0,
      text: 'Все отлично! У тебя как?',
      createdAt: '10:22',
      user: {
        id: 2
      }
    },
    {
      id: 1,
      text: 'Привет как дела? Можно тебе предложить объявление?',
      createdAt: '10:20',
      user: {
        id: 1
      }
    }
  ]);
  const [newData, setNewData] = useState<any>(false);
  const [height, setHeight] = useState(40);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<any>();
  const messageText = ['Привет, как дела?✋', 'Здравствуй, как дела?', 'Привет, чем занимаешься?✌'];
  const [selectMessageText, setSelectMessageText] = useState('');
  const [itemMenu, setItemMenu] = useState<any>({
    status: false,
    item: {},
  });
  const [selectedMessages, setSelectedMessages] = useState<any>([]);
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);
  const optionsHeader = [
    { title: 'Очистить историю', onPress: '' },
  ]
  const itemMenuOptionsMe = [
    { title: 'Изменить', icon: 'create-outline', onPress: '' },
    { title: 'Скопировать текст', icon: 'copy-outline', onOptionPress: () => copyText(itemMenu.item.text) },
    { title: 'Выделить', icon: 'checkmark-circle-outline', onOptionPress: () => selectMessage(itemMenu.item) },
    { title: 'Удалить', type: 'delete', icon: 'trash-outline', onPress: '' }
  ]
  const itemMenuOptionsYou = [
    { title: 'Ответить', icon: 'arrow-undo-outline', onPress: '' },
    { title: 'Скопировать текст', icon: 'copy-outline', onOptionPress: () => copyText(itemMenu.item.text) },
    { title: 'Выделить', icon: 'checkmark-circle-outline', onOptionPress: () => selectMessage(itemMenu.item) },
  ]

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    navigation.addListener('blur', () => {
      // closeChat(dialogs.id);
    });
    navigation.addListener('focus', () => {
      setSelectMessageText(messageText[getRandomInt(3)]);
      if (dialogs) {
        // if (dialogs.isPrivate || !dialogs.id) {
        //   getDialog('null', dialogs.user.id);
        // } else {
        //   getDialog(dialogs.id, 'null');
        // }
        // paginateChat(dialogs.id)
        //   .then((item: any) => {
        //     if (item.body.data && item.body.data.length > 0) {
        //       setData(item.body.data)
        //     }
        //   })
        //   .finally(() => setLoading(false));
      }
    });
    return navigation.setOptions({
      headerTitle: () => <View style={{ marginLeft: -10, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center' }}>
        <View>
          <Image
            source={dialogs.user.miniature ? dialogs.user.miniature : require('../assets/images/no-image.png')}
            resizeMode="contain"
            style={{ width: 35, height: 35, borderRadius: 10, marginRight: 12 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, color: 'white' }}>{dialogs.user.firstName && dialogs.user.lastName ? dialogs.user.firstName + ' ' + dialogs.user.lastName : dialogs.user.nickname}</Text>
        </View>
      </View>,
      headerRight: () => <TouchableOpacity activeOpacity={0.7} onPress={() => setShowHeaderMenu(!showHeaderMenu)}>
        <Ionicons name="settings-outline" size={22} color='white' />
      </TouchableOpacity>
    });
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return selectedMessages && selectedMessages.length > 0 ? <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={{ marginRight: 15 }} activeOpacity={0.7} onPress={() => clickDeleteSelected()}>
            <Ionicons name="trash-outline" size={22} color='white' />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={() => setSelectedMessages([])}>
            <Ionicons name="close-outline" size={28} color='white' />
          </TouchableOpacity>
        </View>
          :
          <TouchableOpacity activeOpacity={0.7} onPress={() => setShowHeaderMenu(!showHeaderMenu)}>
            <Ionicons name="ellipsis-vertical" size={22} color='white' />
          </TouchableOpacity>
      }
    });
  }, [selectedMessages])

  // getChatOn().then((item: any) => {
  //   if (item) {
  //     setNewData(item)
  //   }
  // });

  useEffect(() => {
    if (newData) {
      data.unshift(newData)
      setData(data)
      setUpdate(!update)
    }
  }, [newData])

  const sendMessage = (text: string) => {
    if (text && dialogs && dialogs.user) {
      // createMessage(dialogs.id ? null : dialogs.user.id, { conversationId: dialogs.id ?? 0, isWithReply: false, text })
      //   .then((item: any) => {
      //     if (item.body) {
      //       setNewData(item.body)
      //     }
      //   });
      // setNewData({
      //   "conversationId": dialogs.user.id,
      //   "id": data.length + 1,
      //   "text":text,
      //   "timeForUser": Date.now(),
      //   "userId": auth.id,
      // })
      setText('');
    }
  }
  const selectMessage = (item: any) => {
    let selected = selectedMessages.findIndex((e: any) => e.id === item.id);
    if (selected == -1) {
      setSelectedMessages([...selectedMessages, item]);
    } else {
      let deleteItemArray = selectedMessages.filter((e: any) => e.id != item.id);
      setSelectedMessages(deleteItemArray);
    }
    setItemMenu({ status: false, item: {} });
  }
  const getSelectedMessage = (item: any) => {
    let selected = selectedMessages.findIndex((e: any) => e.id === item.id);
    if (selected == -1) {
      return false
    } else {
      return true
    }
  }
  const clickDeleteSelected = async () => {
    Alert.alert(
      "Подтвердите действие",
      "Вы уверены в удалении выбранных сообщений?",
      [
        {
          text: "Отмена",
          style: "cancel"
        },
        { text: "Удалить", onPress: () => setSelectedMessages([]) }
      ]
    )
    // await deleteComment(commentId);
    // setItemMenu({ status: false, item: {} });
  }
  const clickDelete = async (commentId: number) => {
    // await deleteComment(commentId);
    // setItemMenu({ status: false, item: {} });
  }
  const copyText = async (text: any) => {
    if (text && text.length > 0) {
      await Clipboard.setStringAsync(text);
      setItemMenu({ status: false, item: {} });
    }
  };

  const Item = ({ item, index }: any) => {
    if (Object.keys(item).length === 0) {
      return null
    }
    return item.user.id == 1 ?
      <View key={item.id}>
        <TouchableWithoutFeedback delayLongPress={400} onLongPress={() => selectMessage(item)} onPress={() => selectedMessages && selectedMessages.length > 0 ? selectMessage(item) : setItemMenu({ status: true, item })}>
          <View style={styles.messageContainerMe}>
            {selectedMessages && selectedMessages.length > 0 ? <View style={styles.messageSelect}><Ionicons size={28} name={getSelectedMessage(item) ? "checkmark-circle" : "radio-button-off-outline"} color={Colors.activeText} /></View> : <View></View>}
            <LinearGradient
              colors={[Colors.chatMe.background_1, Colors.chatMe.background_2]} start={[0.0, 0.25]} end={[1.0, 1.0]}
              key={item.id}
              style={styles.messageMe}>
              {/* <View style={styles.messageMeAnswer}>
              <Text style={styles.messageMeAnswerName} numberOfLines={1}>tasdgasd</Text>
              <Text style={styles.messageMeAnswerText} numberOfLines={1}>tasdgasd gafsd gasgas g</Text>
            </View> */}
              <View style={styles.messageTextBox}>
                <Text style={styles.messageMeText}>{item.text}</Text>
                <Text style={styles.dateMe}>{item.createdAt} {item.user.id == 1 && item.isViewed ? <Ionicons name="checkmark-done-sharp" size={12} color="#fff" /> : <Ionicons name="checkmark-sharp" size={12} color="white" />}</Text>
              </View>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </View>
      :
      <View key={item.id}>
        <TouchableWithoutFeedback delayLongPress={400} onLongPress={() => selectMessage(item)} onPress={() => selectedMessages && selectedMessages.length > 0 ? selectMessage(item) : setItemMenu({ status: true, item })}>
          <View style={styles.messageContainer}>
            {selectedMessages && selectedMessages.length > 0 ? <View style={styles.messageSelect}><Ionicons size={28} name={getSelectedMessage(item) ? "checkmark-circle" : "radio-button-off-outline"} color={Colors.activeText} /></View> : <View></View>}
            <View style={styles.message}>
              {/* <View style={styles.messageAnswer}>
            <Text style={styles.messageAnswerName} numberOfLines={1}>tasdgasd</Text>
            <Text numberOfLines={1}>tasdgasd gafsd gasgas g</Text>
          </View> */}
              <View style={styles.messageTextBox}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.date}>{item.createdAt}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    messageContainerMe: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    messageContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    messageSelect: {
      top: 5,
      paddingRight: 15
    },
    image: {
      height: '100%',
      justifyContent: 'center',
      backgroundColor: Colors.background,
    },
    message: {
      position: 'relative',
      maxWidth: 300,
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: '#ececec',
      alignSelf: 'flex-start',
      marginTop: 10,
    },
    messageMe: {
      position: 'relative',
      zIndex: 0,
      maxWidth: 300,
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 8,
      alignSelf: 'flex-end',
      marginTop: 10,
    },
    messageTextBox: {
      flexDirection: 'row',
      backgroundColor: 'transparent'
    },
    messageMeText: {
      color: '#fff',
      fontSize: 15,
    },
    messageText: {
      color: Colors.text,
      fontSize: 15,
    },
    dateMe: {
      fontSize: 10,
      color: '#f9f9f9',
      marginLeft: 'auto',
      paddingLeft: 5,
      alignSelf: 'flex-end',
      textAlign: 'right',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    date: {
      fontSize: 10,
      color: '#999',
      marginLeft: 'auto',
      paddingLeft: 5,
      alignSelf: 'flex-end',
      textAlign: 'right',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    messageMeAnswer: {
      backgroundColor: 'transparent',
      borderLeftWidth: 2,
      borderLeftColor: '#fff',
      paddingLeft: 10,
      marginBottom: 5
    },
    messageMeAnswerName: {
      color: '#fff',
      fontWeight: 'bold'
    },
    messageMeAnswerText: {
      color: '#fff',
    },
    messageAnswer: {
      backgroundColor: 'transparent',
      borderLeftWidth: 2,
      borderLeftColor: '#ddd',
      paddingLeft: 10,
      marginBottom: 5
    },
    messageAnswerName: {
      fontWeight: 'bold',
      color: Colors.activeText
    },
    send: {
      zIndex: 9999,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    boxInput: {
      flex: 1
    },
    boxButton: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 10
    },
    boxGallery: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 10
    },
    input: {
      height: 40,
      minHeight: 40,
      maxHeight: 100,
      marginVertical: 8,
      marginRight: 15,
      marginLeft: 15,
      borderWidth: 0,
      borderRadius: 40,
      backgroundColor: '#f9f9f9',
      textAlignVertical: 'top',
      justifyContent: "flex-start",
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 15,
      color: Colors.text,
    },
    contentMedia: {
      flex: 1,
      paddingHorizontal: 10,
      overflow: 'hidden',
      borderRadius: 10
    },
    boxImageFon: {
      flex: 1,
      borderWidth: 3,
      borderColor: 'rgba(255,255,255,0.3)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boxImage: {
      width: '100%',
      height: 110,
      borderRadius: 8,
      resizeMode: 'cover',
      backgroundColor: '#f9f9f9',
    },
    add: {
      flex: 1,
      flexDirection: 'row'
    },
    addBox: {
      flex: 1,
      margin: 3,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
    },
    headerToolBar: {
      flexDirection: 'row',
      justifyContent: "space-between",
      paddingVertical: 5
    },
    headerToolBarBox: {
      padding: 5
    },
    selectImage: {
      position: 'absolute',
      top: 5,
      right: 5
    },
    emptyBox: {
      zIndex: 999999,
      top: '35%',
      backgroundColor: 'rgba(255,255,255,0.6)',
      borderRadius: 10,
      padding: 15,
      height: 150,
      maxWidth: 270,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    emptyText: {
      fontSize: 14,
      alignSelf: 'center',
      textAlign: 'center'
    },
    emptyTextBold: {
      fontWeight: 'bold',
      fontSize: 17,
      alignSelf: 'center',
      textAlign: 'center'
    },
    emptyBtn: {
      marginTop: 10,
      paddingVertical: 7,
      paddingHorizontal: 12,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 20
    }
  });

  return (
    <GestureHandlerRootView style={styles.container} >
      <View style={styles.image} >
        <ImageBackground source={require('../assets/images/background-header.png')} style={{ height: 90 }} />
        {
          loading ?
            <Loading background="transparent" loading={loading} />
            :
            !data || data.length <= 0 && <View style={styles.emptyBox}>
              <Text style={styles.emptyTextBold}>Сообщений пока нет...</Text>
              <Text style={styles.emptyText}>Отправьте приветственное сообщение</Text>
              <TouchableOpacity activeOpacity={0.8} style={styles.emptyBtn} onPress={() => sendMessage(selectMessageText)}><Text>{selectMessageText}</Text></TouchableOpacity>
            </View>
        }
        <FlatList
          inverted
          data={data}
          extraData={update}
          renderItem={Item}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={true}
          maxToRenderPerBatch={12}
          initialNumToRender={20}
        />
        <View style={styles.send}>
          <View style={styles.boxGallery}>
            <TouchableOpacity>
              <Ionicons name="image-outline" size={24} color={Colors.text} />
            </TouchableOpacity>
          </View>
          <View style={styles.boxInput}>
            <TextInput
              ref={inputRef}
              style={[styles.input, { height: height <= 100 ? height : 100 }]}
              placeholder="Написать сообщение"
              autoCapitalize="none"
              multiline={true}
              editable
              maxLength={1500}
              onChangeText={(text) => setText(text)}
              onContentSizeChange={(event) => setHeight(event.nativeEvent.contentSize.height)}
              value={text}
              placeholderTextColor='#999'
            />
          </View>
          {
            text.length > 0 &&
            <View style={styles.boxButton}>
              <TouchableOpacity onPress={() => sendMessage(text)}>
                <Ionicons size={25} name="send" color={Colors.activeText} />
              </TouchableOpacity>
            </View>
          }
        </View>
      </View>
      <OptionsMenu show={itemMenu.status} type="top" data={itemMenuOptionsMe} onClose={(item: any) => setItemMenu({ status: false, item })} />
      {/* <OptionsMenu show={showHeaderMenu} position="top-right" theme="mini" data={optionsHeader} onClose={() => setShowHeaderMenu(!showHeaderMenu)} /> */}

      <DialogModal
        show={showHeaderMenu}
        setShow={(e: boolean) => setShowHeaderMenu(!showHeaderMenu)}
        text="Вы не можете писать сообщение в общедомовой чат, пока вы не подтвердите свой дом"
        buttons={[
          { text: 'Назад', onPress: () => setShowHeaderMenu(!showHeaderMenu) },
          { text: 'Подтвердить дом', onPress: () => setShowHeaderMenu(!showHeaderMenu) }
        ]} />
    </GestureHandlerRootView >
  );
}