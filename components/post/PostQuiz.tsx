import React, { useEffect, useState, memo } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { Text, TextBold } from '../../components/Themed';
import PostContent from './PostContent';

export default memo(function PostQuiz(props: any) {
  const { item } = props;
  const [selected, setSelected] = useState<any>(false);

  useEffect(() => {

  }, []);

  return <View style={styles.container}>
    <PostHeader item={item} />
    <View style={styles.content}>
      <PostContent item={item} />
      <View style={styles.quiz}>
        <TextBold style={styles.quizTitle}>{item.quizTitle}</TextBold>
        <View style={styles.row}>
          <View>
            <Text style={styles.quizType}>Публичный опрос</Text>
          </View>
          <View>
            <Text style={styles.quizCategory}>{item.quizCategory}</Text>
          </View>
        </View>
        <View style={styles.quizList}>
          {
            item.quizList && item.quizList.map((quiz: any) => <TouchableOpacity activeOpacity={0.8} onPress={() => setSelected(quiz)} style={styles.quizListItem}>
              <View style={[styles.quizListItemProgress, { width: selected ? quiz.procent + '%' : '0%' }]} />
              {
                selected && <View style={styles.quizListItemRadio}>
                  <Ionicons name={selected.id == quiz.id ? "radio-button-on-outline" : "ellipse-outline"} size={22} color="#7A24E7" />
                </View>
              }
              <View>
                <Text style={styles.quizListItemText}>{quiz.text}</Text>
              </View>
              {
                selected && <View style={styles.quizListItemProcent}><Text style={styles.quizListItemProcentText}>{quiz.procent + '%'}</Text></View>
              }
            </TouchableOpacity>)
          }
        </View>
        <Text style={styles.quizType}>Проголосовало 422 человека</Text>
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
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  quiz: {
    borderWidth: 1,
    borderColor: '#6A2BA9',
    borderRadius: 8,
    padding: 12
  },
  quizTitle: {
    fontSize: 17,
    marginBottom: 5
  },
  quizType: {
    color: '#999'
  },
  quizCategory: {
    color: Colors.activeText
  },
  quizList: {
    flexDirection: 'column',
    paddingTop: 10
  },
  quizListItem: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    minHeight: 42,
    paddingRight: 40,
    marginBottom: 8
  },
  quizListItemProgress: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(122, 36, 231, 0.1)',
  },
  quizListItemProcent: {
    position: 'absolute',
    right: 10,
    top: 11
  },
  quizListItemProcentText: {
    color: '#999',
    fontSize: 14
  },
  quizListItemRadio: {
    marginRight: 10
  },
  quizListItemText: {
    fontSize: 15
  }
});
