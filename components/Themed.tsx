import { Text as DefaultText, View as DefaultView, TextInput as DefaultInput } from 'react-native';

import Colors from '../constants/Colors';
import { useState } from 'react';
import { ColorSchemeName, useColorScheme as _useColorScheme } from 'react-native';

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  const [theme, setTheme] = useState(_useColorScheme() as NonNullable<ColorSchemeName>);

  return theme;
}

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];
export type InputProps = DefaultInput['props'];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;

  return <DefaultText style={[{ fontSize: 16, fontFamily: 'calibri' }, style]} {...otherProps} />;
}
export function TextBold(props: TextProps) {
  const { style, ...otherProps } = props;

  return <DefaultText style={[{ fontSize: 16, fontFamily: 'calibriBold' }, style]} {...otherProps} />;
}

export function Input(props: InputProps) {
  const { style, ...otherProps } = props;
  let optionStyle: any = {
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: Colors.background,
    borderColor: Colors.borderColor,
    paddingVertical: 8,
    fontSize: 16,
    color: Colors.text,
    fontFamily: 'calibri',
    paddingHorizontal: 15
  }
  return <DefaultInput
    maxLength={100}
    style={[optionStyle, style]}
    placeholderTextColor='#999'
    {...otherProps} />;
}