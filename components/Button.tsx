import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import React from 'react';

export default function Button(props: any) {
      const { onPress, title = 'Save', type, size, icon, iconSize, iconColor, disabled = false, loading = false, children } = props;
      const styles = StyleSheet.create({
            button: {
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  paddingVertical: 11,
                  paddingHorizontal: 15,
                  borderRadius: 8,
                  color: '#fff',
                  minHeight: 43
            },
            outline: {
                  backgroundColor: 'transparent',
                  borderWidth: 1.5,
                  paddingVertical: 10,
                  borderColor: Colors.button.backgroundColor,
                  minHeight: 43
            },
            buttonContent: {
                  flexDirection: 'row',
                  alignItems: 'center'
            },
            icon: {
                  marginLeft: 5
            },
            disabled: {
                  borderColor: '#ddd',
                  backgroundColor: '#ddd'
            },
            disabledText: {
                  color: '#fff'
            },
            text: {
                  fontSize: 16,
                  lineHeight: 21,
                  letterSpacing: 0.25,
                  color: 'white',
            },
            sizeMini: {
                  minHeight: 35,
                  borderRadius: 6,
                  paddingVertical: 7,
                  paddingHorizontal: 10,
            },
            sizeMiniText: {
                  fontSize: 13,
            }
      });

      return (
            type == 'outline' ?
                  <TouchableOpacity
                        activeOpacity={disabled ? 1 : 0.7}
                        style={[
                              styles.button,
                              type == 'outline' && styles.outline,
                              disabled && styles.disabled,
                              size == 'mini' && styles.sizeMini
                        ]} onPress={onPress}
                        disabled={disabled}>
                        {
                              loading ?
                                    <ActivityIndicator size="small" color={Colors.button.color} /> :
                                    <Text style={[
                                          styles.text,
                                          type == 'outline' && { color: Colors.button.color },
                                          disabled && styles.disabledText,
                                          size == 'mini' && styles.sizeMiniText
                                    ]}>{title}</Text>
                        }
                  </TouchableOpacity>
                  :
                  <TouchableOpacity activeOpacity={disabled ? 1 : 0.7} onPress={onPress} disabled={disabled}>
                        <LinearGradient
                              colors={[
                                    disabled ? 'rgba(255,255,255,0.2)' : Colors.button.backgroundColor,
                                    disabled ? 'rgba(255,255,255,0.2)' : Colors.button.backgroundColor2]}
                              start={[0.1, 0.1]}
                              end={[1, 1]}
                              style={[
                                    styles.button,
                                    disabled && styles.disabled,
                                    size == 'mini' && styles.sizeMini
                              ]}>
                              {
                                    loading ?
                                          <ActivityIndicator size="small" color="#fff" />
                                          :
                                          children ?
                                                children
                                                :
                                                <View style={styles.buttonContent}>
                                                      <Text style={[
                                                            styles.text,
                                                            disabled && styles.disabledText,
                                                            size == 'mini' && styles.sizeMiniText
                                                      ]}>
                                                            {title}
                                                      </Text>
                                                      {icon && <Ionicons style={styles.icon} name={icon} size={iconSize ? iconSize : 20} color={iconColor ? iconColor : 'white'} />}
                                                </View>
                              }
                        </LinearGradient>
                  </TouchableOpacity>
      );
}