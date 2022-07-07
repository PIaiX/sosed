import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import PostDefault from '../components/post/PostDefault';
import PostAd from '../components/post/PostAd';
import PostQuiz from '../components/post/PostQuiz';

const { width, height } = Dimensions.get('window')

export default function Home(props: any) {
  const navigation = useNavigation();
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
      text: 'Дорогие соседи, сегодня в нашем районе по адресу Исаакиевская пл., 1,  открылась невероятная выставка шедевров скульптора Микеланджело. Всем обязательно советую пойти! Вход стоит 500 рублей за человека, но оно явно того стоит!!!',
      date: '17 декабря в 21:30',
      likesCount: 25,
      commentsCount: 100,
      bookmarksCount: 12
    },
    {
      id: 1,
      type: 2,
      image: require('../assets/images/avatar.png'),
      name: 'Иван Геронов',
      city: 'Казань',
      date: '17 декабря в 21:30'
    },
    {
      id: 2,
      type: 3,
      image: require('../assets/images/avatar.png'),
      name: 'Иван Геронов',
      city: 'Казань',
      date: '17 декабря в 21:30'
    },
    {
      id: 3,
      type: 1,
      image: require('../assets/images/avatar.png'),
      name: 'Иван Геронов',
      city: 'Казань',
      date: '17 декабря в 21:30'
    },
    {
      id: 4,
      type: 1,
      image: require('../assets/images/avatar.png'),
      name: 'Иван Геронов',
      city: 'Казань',
      text: 'Дорогие соседи, сегодня в нашем районе по адресу Исаакиевская пл., 1,  открылась невероятная выставка шедевров скульптора Микеланджело. Всем обязательно советую пойти! Вход стоит 500 рублей за человека, но оно явно того стоит!!!',
      date: '17 декабря в 21:30'
    }
  ]);

  useEffect(() => {

  }, [])

  const itemPoint = ({ item }) => {
    return <TouchableOpacity activeOpacity={0.8} style={styles.point}>
      <LinearGradient
        colors={['#6A2BA9', '#9532C7']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.pointBackground}>
        <View style={styles.pointContent}>
          <View style={styles.pointHeader}></View>
          <Text style={styles.pointTitle}>120</Text>
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
    }
  }

  return <ScrollView showsVerticalScrollIndicator={false}>
    <LinearGradient
      colors={[Colors.header.backgroundColor, Colors.header.backgroundColor2]}
      start={[0, 1]}
      end={[1, 0]}
      style={styles.header}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setCategory(0)} style={[styles.tab, category === 0 && styles.tabActive]}><Text style={styles.tabText}>Город</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory(1)} style={[styles.tab, category === 1 && styles.tabActive]}><Text style={styles.tabText}>Район</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setCategory(2)} style={[styles.tab, category === 2 && styles.tabActive]}><Text style={styles.tabText}>Дом</Text></TouchableOpacity>
      </View>
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
    </LinearGradient>
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={itemPost}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 50,
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 15,
  },
  header: {
    backgroundColor: '#C697FF',
    paddingTop: 70,
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
    height: 20,
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
    fontWeight: 'bold',
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
