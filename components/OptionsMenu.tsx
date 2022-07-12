import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Modal, Pressable, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function OptionsMenu(props: any) {
    const { data } = props;
    const styles = StyleSheet.create({
        modal: {
            flex: 1,
            borderBottomColor: '#fff',
        },
        fon: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        box: {
            backgroundColor: 'white',
            width: '100%',
            maxHeight: '50%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            elevation: 1,
            padding: 12
        },
        topRight: {
            alignItems: 'flex-end',
            justifyContent: 'flex-start'
        },
        boxTopRight: { width: 'auto', borderRadius: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8, margin: 15, padding: 15 },
        link: {
            padding: 10,
            borderRadius: 8,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center'
        },
        linkMini: {
            padding: 8,
            alignSelf: 'flex-start',
            backgroundColor: 'transparent',
        },
        linkText: {
            fontSize: 16,
        },
        deleteText: {
            color: '#f93a54'
        },
        activeText: {
            color: Colors.activeText
        },
        linkTextMini: {
            textAlign: 'left',
            alignSelf: 'flex-start'
        },
        endItem: {
            marginBottom: 0
        },
        icon: {
            marginRight: 10,
            color: Colors.text
        }
    });
    return <Modal
        animationType="fade"
        transparent={true}
        visible={props.show ? props.show : false}
        onRequestClose={props.onClose}
    >
        <Pressable style={[styles.fon, props.position ? styles.topRight : null]} onPress={props.onClose}>
            <View style={[styles.box, props.position ? styles.boxTopRight : null]}>
                {
                    data && data.map((item: any, index: number) =>
                        <TouchableOpacity activeOpacity={0.7} style={[styles.link, props.theme ? styles.linkMini : null, index === data.length - 1 ? styles.endItem : null]} onPress={() => item.onOptionPress()}>
                            {
                                item.icon ?
                                    item.typeIcon == 'FontAwesome5' ?
                                        <FontAwesome5 name={item.icon} size={22} style={[styles.icon, item.type && item.type == 'delete' ?
                                            styles.deleteText
                                            : item.type && item.type == 'active' ?
                                                styles.activeText
                                                : null
                                        ]} />
                                        :
                                        <Ionicons name={item.icon} size={22} style={[styles.icon, item.type && item.type == 'delete' ?
                                            styles.deleteText
                                            : item.type && item.type == 'active' ?
                                                styles.activeText
                                                : null
                                        ]} />
                                    : null
                            }
                            <Text style={[styles.linkText, props.theme ? styles.linkTextMini : null, item.type && item.type == 'delete' ?
                                styles.deleteText
                                : item.type && item.type == 'active' ?
                                    styles.activeText
                                    : null
                            ]}>{item.title}</Text>

                        </TouchableOpacity>
                    )
                }
            </View>
        </Pressable>
    </Modal>

}
