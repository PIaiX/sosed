import React, { useEffect, useState, memo, useCallback } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import { Text } from '../Themed';

export default memo(function PostContent(props: any) {
  const { item } = props;
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);
  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  }
  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 6);
  }, []);
  return <View style={styles.content}>
    {item.text && item.text.length > 0 && <View>
      <Text onTextLayout={onTextLayout} numberOfLines={textShown ? undefined : 5} style={styles.text}>
        {item.text}
      </Text>
      {
        lengthMore ? <Text
          onPress={toggleNumberOfLines}
          style={{ marginTop: 5, color: '#999' }}>{textShown ? 'закрыть' : 'читать еще'}</Text>
          : null
      }
    </View>}
    {item.media && <View><Image style={styles.media} source={item.media} /></View>}
  </View>

});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: 15
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
  }
});
