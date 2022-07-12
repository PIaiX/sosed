import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import Colors from '../constants/Colors';
import { Text } from './Themed';

export default memo(function Loading(props: any) {

  const styles = StyleSheet.create({

    loading: {
      zIndex: 999,
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.background ? props.background : Colors.background
    },

    text: {
      marginTop: 10,
      color: Colors.text,
      textAlign: 'center',
      alignSelf: 'center'
    },
    container: {
      zIndex: 999999,
      alignItems: 'center',
      backgroundColor: props.background ? props.background : Colors.background
    },
  });

  return <View style={styles.loading}>
    <ActivityIndicator size="large" color={props.color ? props.color : Colors.activeText} />
    {props.title && <Text style={styles.text}>{props.title}</Text>}
  </View>
});