import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, TextBold } from '../../components/Themed';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

export default function PostAdScreen(props: any) {
  const navigation: any = useNavigation();
  const { route } = props;
  const item = route.params;
  const [selected, setSelected] = useState(0);

  useEffect(() => {

  }, [])

  return <View style={styles.background}>
    <ImageBackground style={styles.header} source={require('../../assets/images/background-header.png')} />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.title}>Заявка на мероприятия</Text>
        <TextBold style={styles.adTitle}>{item.adTitle}</TextBold>
        <Image style={styles.adImage} source={require('../../assets/images/image-ad-full.png')} />
        <TouchableOpacity style={[styles.ad, selected === 0 && styles.adActive]} activeOpacity={0.8} onPress={() => setSelected(0)}>
          <View style={styles.adHeader}>
            <View>
              <Text style={styles.adHeaderText}>Оффлайн:</Text>
            </View>
            <View>
              <Ionicons name={selected === 0 ? 'checkbox' : 'square-outline'} size={25} color={Colors.activeText} />
            </View>
          </View>
          <View style={styles.adContent}>
            <Text style={styles.adListText}><Ionicons name="time-outline" size={15} color={Colors.activeText} /> 31 декабря 2021 в 20:00</Text>
            <Text style={styles.adListText}><Ionicons name="location-outline" size={15} color={Colors.activeText} /> Высотная улица, 1</Text>
            <Text style={styles.adListText}><Ionicons name="people-outline" size={15} color={Colors.activeText} /> 350 мест</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.ad, selected === 1 && styles.adActive]} activeOpacity={0.8} onPress={() => setSelected(1)}>
          <View style={styles.adHeader}>
            <View>
              <Text style={styles.adHeaderText}>Оффлайн:</Text>
            </View>
            <View>
              <Ionicons name={selected === 1 ? 'checkbox' : 'square-outline'} size={25} color={Colors.activeText} />
            </View>
          </View>
          <View style={styles.adContent}>
            <Text style={styles.adListText}><Ionicons name="time-outline" size={15} color={Colors.activeText} /> 31 декабря 2021 в 20:00</Text>
            <Text style={styles.adListText}><Ionicons name="location-outline" size={15} color={Colors.activeText} /> Высотная улица, 1</Text>
            <Text style={styles.adListText}><Ionicons name="people-outline" size={15} color={Colors.activeText} /> 350 мест</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
    <View style={styles.contentFooter}>
      <Button type="big" title="Отправить заявку" onPress={() => navigation.goBack()} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  header: {
    height: 90,
  },
  content: {
    padding: 15
  },
  contentFooter: {
    padding: 15,
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
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },
  adActive: {
    borderColor: '#6A2BA9'
  },
  adHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  adHeaderText: {
    fontSize: 15
  },
  adImage: {
    width: '100%',
    height: 170,
    borderRadius: 10,
    marginBottom: 15
  },
  adHeaderRight: {
    flexDirection: 'column',
    paddingLeft: 20,
    flex: 1,
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 22,
    marginBottom: 10
  },
  adTitle: {
    fontSize: 18,
    marginBottom: 15
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
    color: '#777'
  },

});
