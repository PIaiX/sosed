import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import PostDefault from '../components/post/PostDefault';
import PostAd from '../components/post/PostAd';
import PostQuiz from '../components/post/PostQuiz';
import DialogModal from '../components/DialogModal';
import { Text, TextBold } from '../components/Themed';

const { width, height } = Dimensions.get('window')

export default function Home(props: any) {
  const navigation = useNavigation();

  const [show, setShow] = useState(true);

  const [category, setCategory] = useState(0);
  const [quiz, setQuiz] = useState<any>([
    {
      id: 0,
      image: require('../assets/images/quiz.png'),
      title: 'События города',
      checked: false
    },
    {
      id: 1,
      image: require('../assets/images/quiz.png'),
      title: 'Волонтерство',
      checked: true
    },
    {
      id: 2,
      image: require('../assets/images/quiz.png'),
      title: 'События города',
      checked: false
    },
    {
      id: 3,
      image: require('../assets/images/quiz.png'),
      title: 'События города',
      checked: false
    },
    {
      id: 4,
      image: require('../assets/images/quiz.png'),
      title: 'События города',
      checked: false
    }
  ]);

  const [posts, setPosts] = useState([
    {
      id: 0,
      type: 1,
      image: require('../assets/images/avatar.png'),
      media: require('../assets/images/postimage.png'),
      name: 'Иван Геронов',
      city: 'Казань',
      category: 'Безопасность',
      text: 'Дорогие соседи, сегодня в нашем районе по адресу Исаакиевская пл., 1,  открылась невероятная выставка шедевров скульптора Микеланджело. Всем обязательно советую пойти! Вход стоит 500 рублей за человека, но оно явно того стоит!!!',
      date: '17 декабря в 21:30',
      likesCount: 25,
      commentsCount: 100,
    },
    {
      id: 1,
      type: 2,
      image: require('../assets/images/avatar.png'),
      name: 'Иван Геронов',
      city: 'Казань',
      date: '17 декабря в 21:30',
      likesCount: 25,
      commentsCount: 100,

      quizId: 0,
      quizTitle: 'На сколько вас устраивает чистота воздуха в нашем городе? Выберите один вариант ответа',
      quizCategory: 'Экология',
      quizList: [
        {
          id: 0,
          text: 'Отлично',
          value: 132,
          procent: 30,
          checked: true
        },
        {
          id: 1,
          text: 'Нормально',
          value: 332,
          procent: 50,
          checked: false
        },
        {
          id: 2,
          text: 'Плохо',
          value: 65,
          procent: 20,
          checked: false
        },
        {
          id: 3,
          text: 'Очень плохо',
          value: 0,
          procent: 0,
          checked: false
        }
      ]
    },
    {
      id: 2,
      type: 3,
      image: require('../assets/images/avatar.png'),
      name: 'Иван Геронов',
      city: 'Казань',
      date: '17 декабря в 21:30',
      likesCount: 25,
      commentsCount: 100,

      adTitle: 'Шумная вечеринка на крыше небоскрёба'
    },
    {
      id: 4,
      type: 1,
      image: require('../assets/images/avatar.png'),
      name: 'Иван Геронов',
      city: 'Казань',
      text: 'Дорогие соседи, сегодня в нашем районе по адресу Исаакиевская пл., 1,  открылась невероятная выставка шедевров скульптора Микеланджело. Всем обязательно советую пойти! Вход стоит 500 рублей за человека, но оно явно того стоит!!!',
      date: '17 декабря в 21:30',
      likesCount: 25,
      commentsCount: 100,
    }
  ]);

  useEffect(() => {
    return navigation.setOptions({
      headerBackground: () => <View style={styles.header}>
        <ImageBackground style={styles.headerBackground} source={require('../assets/images/background-header.png')}>
          <View style={styles.headerContent}>
            <View>
              <Image fadeDuration={0} style={{ width: 28 }} resizeMode="contain" source={require('../assets/images/menu.png')} />
            </View>
            <View style={styles.tabs}>
              <TouchableOpacity onPress={() => setCategory(0)} style={[styles.tab, category === 0 && styles.tabActive]}><Text style={styles.tabText}>Город</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => setCategory(1)} style={[styles.tab, category === 1 && styles.tabActive]}><Text style={styles.tabText}>Район</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => setCategory(2)} style={[styles.tab, category === 2 && styles.tabActive]}><Text style={styles.tabText}>Дом</Text></TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Dialogs')}><Image fadeDuration={0} style={{ width: 30 }} resizeMode="contain" source={require('../assets/images/dialogs.png')} /></TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    });
  }, [])

  const itemPoint = ({ item }) => {
    return <TouchableOpacity activeOpacity={0.8} style={styles.point}>
      <LinearGradient
        colors={['#6A2BA9', '#9532C7']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.pointBackground}>
        <View style={styles.pointContent}>
          <View style={styles.pointHeader}>
            <View>
              <Ionicons name="gift-outline" size={20} color={Colors.iconColor} />
            </View>
            <View>
              <Ionicons name="arrow-forward-outline" size={20} color="white" />
            </View>
          </View>
          <TextBold style={styles.pointTitle}>120</TextBold>
          <Text style={styles.pointSubTitle}>Ваши баллы</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  }

  const itemQuiz = ({ item }) => {
    return <TouchableOpacity activeOpacity={0.8} style={styles.quiz} onPress={
      () => {
        let newQuiz = quiz.map((e: any) => {
          if (e.id === item.id) {
            e.checked = !item.checked;
          }
          return e;
        });
        setQuiz(newQuiz);
      }}>
      <ImageBackground style={styles.quizBackgroundImage} source={item.image}>
        <Ionicons name={item.checked ? "checkmark-circle-sharp" : "ellipse-outline"} style={styles.checkbox} size={25} color={item.checked ? 'white' : 'rgba(255,255,255,0.6)'} />
        <View style={styles.quizContent}>
          <Text style={styles.quizTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  }

  const itemPost = ({ item, index }) => {
    if (item.type == 1 || !item.type) {
      return <PostDefault key={index} item={item} />
    } else if (item.type == 2) {
      return <PostQuiz key={index} item={item} />
    } else if (item.type == 3) {
      return <PostAd key={index} item={item} />
    }
  }

  return <ScrollView showsVerticalScrollIndicator={false} style={styles.background}>
    <ImageBackground source={require('../assets/images/background-header.png')} >
      <View style={styles.content}>
        <View style={styles.filter}>
          <View>
            <Button title="Управляющая компания" icon="arrow-forward-outline" iconSize={20} />
          </View>
          <View>
            <TouchableOpacity style={styles.select}><Text style={styles.selectText}>Сортировка</Text><Ionicons name="chevron-down-outline" color="white" size={18} /></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.quizBottom}>
        <FlatList
          data={quiz}
          horizontal
          contentContainerStyle={styles.quizContainer}
          renderItem={itemQuiz}
          ListHeaderComponent={itemPoint}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
    <View style={styles.container}>
      {
        !category || category === 0 ?
          <FlatList
            data={posts}
            renderItem={itemPost}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          : category == 1 ?
            <View style={styles.contentInfo}>
              <Text>Вам не доступен раздел “Новости Района”, поскольку Вы не добавили Дом.
                Чтобы увидеть этот раздел заполните информацию о профиле либо <Text style={{ color: Colors.activeText }}>добавьте свой дом</Text>.</Text>
              <View style={styles.contentInfoGift}><Ionicons name="gift-outline" size={30} color={Colors.activeText} /><Text style={styles.contentInfoGiftText}>Вы получите 50 баллов</Text></View>
            </View>
            : category == 2 &&
            <View style={styles.contentInfo}>
              <Text>Вам не доступен раздел “Новости Дома”, поскольку Вы не добавили Дом.
                Чтобы увидеть этот раздел заполните информацию о профиле либо <Text style={{ color: Colors.activeText }}>добавьте свой дом</Text>.</Text>
              <View style={styles.contentInfoGift}><Ionicons name="gift-outline" size={30} color={Colors.activeText} /><Text style={styles.contentInfoGiftText}>Вы получите 50 баллов</Text></View>
            </View>

      }
    </View>
    <DialogModal
      show={show}
      close={true}
      setShow={(e: boolean) => setShow(e)}
      buttons={[
        { text: 'ОК', onPress: () => setShow(!show) },
        { text: '+120 баллов', onPress: () => setShow(!show) }
      ]}>
      <Image source={require('../assets/images/reg-point.png')} resizeMode="contain" style={{ height: 200, width: '70%', alignSelf: 'center' }} />
      <Text style={{ fontSize: 18 }}>
        <TextBold style={{ fontSize: 22, color: Colors.activeText }}>Поздравляем!</TextBold>{'\n'}Вы прошли регистрацию и получили <TextBold style={{ color: Colors.activeText }}>120</TextBold> баллов!
      </Text>
    </DialogModal>
  </ScrollView>
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background
  },
  container: {
    paddingTop: 15,
    paddingBottom: 40,
    flex: 1,
  },
  headerContent: {
    paddingTop: 40,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    height: 92,
    overflow: 'hidden'
  },
  headerBackground: {
    height: 410
  },
  content: {
    paddingTop: 100,
    paddingHorizontal: 15,
  },
  contentInfo: {
    paddingHorizontal: 15,
  },
  contentInfoGift: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentInfoGiftText: {
    fontSize: 17,
    paddingLeft: 10
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  tab: {
    marginHorizontal: 15,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#7A24E7'
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  filter: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  select: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  selectText: {
    color: "#fff"
  },
  quizBottom: {
    paddingBottom: 15
  },
  quizContainer: {
    paddingHorizontal: 15
  },
  quiz: {
    width: width / 3 - 24,
    marginRight: 8,
  },
  quizBackgroundImage: {
    borderRadius: 8,
    overflow: 'hidden',
    height: width / 3 - 24,
    justifyContent: 'flex-end'
  },
  quizContent: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignSelf: 'center',
    textAlign: 'center'
  },
  quizTitle: {
    color: 'white',
    fontSize: 13,
    alignSelf: 'center',
    textAlign: 'center'
  },
  checkbox: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  point: {
    width: width / 3 - 24,
    marginRight: 8,
  },
  pointBackground: {
    borderRadius: 8,
    overflow: 'hidden',
    height: width / 3 - 24,
    justifyContent: 'flex-end'
  },
  pointHeader: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pointContent: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignSelf: 'center',
    textAlign: 'center'
  },
  pointTitle: {
    color: 'white',
    fontSize: 28,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center'
  },
  pointSubTitle: {
    color: 'white',
    fontSize: 13,
    alignSelf: 'center',
    textAlign: 'center'
  }
});
