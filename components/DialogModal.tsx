import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import React, { memo } from 'react';
import { BlurView } from 'expo-blur';

export default memo(function DialogModal(props: any) {
      const { title, text, buttons, show, setShow, children, close } = props;

      const styles = StyleSheet.create({
            modal: {
                  flex: 1,
                  borderBottomColor: '#fff',
            },
            dialogFon: {
                  flex: 1,
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20,
            },
            close: {
                  alignSelf: 'flex-end'
            },
            dialogModal: {
                  backgroundColor: 'white',
                  width: '100%',
                  borderRadius: 20,
                  elevation: 2,
            },
            dialogContent: {
                  padding: 20
            },
            dialogFooter: {
                  flexDirection: 'row',
                  borderTopWidth: 2,
                  borderTopColor: 'rgba(64, 64, 64, 0.1)'
            },
            dialogFooterItem: {
                  borderTopLeft: 3,
                  borderLeftColor: 'rgba(64, 64, 64, 0.1)',
                  marginLeft: -3,
                  flex: 1,
                  height: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  textAlign: 'center',
                  backgroundColor: 'rgba(122, 36, 231, 0.05)'
            },
            blurContainer: {
                  flex: 1,
                  padding: 20,
                  justifyContent: 'center',
            },
      });

      return <Modal
            transparent={true}
            // animationType="slide"
            visible={show}
            onRequestClose={() => setShow(!show)}
      >
            <Pressable style={styles.dialogFon} onPress={() => setShow(!show)}>
                  <View style={styles.dialogModal}>
                        <View style={styles.dialogContent}>
                              {close && <TouchableOpacity style={styles.close} onPress={() => setShow(!show)}><Ionicons name="close" size={25} color="#999" /></TouchableOpacity>}
                              {text && text.length > 0 ? <Text style={{ fontSize: 16 }}>{text}</Text> : null}
                              {children ? children : null}
                        </View>
                        <View style={styles.dialogFooter}>
                              {
                                    buttons && buttons.map((item: any) => <TouchableOpacity style={styles.dialogFooterItem} onPress={() => item.onPress()}><Text style={{ color: item.color ? item.color : Colors.activeText, fontWeight: 'bold', fontSize: 16 }}>{item.text}</Text></TouchableOpacity>)
                              }
                        </View>
                  </View>
            </Pressable>
      </Modal>
});