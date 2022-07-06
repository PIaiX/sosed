import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function PostDefault(props: any) {
  return <View style={styles.container}><Text>Тест</Text></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
