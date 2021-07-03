import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';

interface ButtonProps {
  children: string;
  onPress: () => void;
  bodyStyle: any;
  textStyle: any;
}

export const ButtonSyled: React.FC<ButtonProps> = props => {
  return (
    <TouchableOpacity
      {...props}
      style={{...styles.button, ...props.bodyStyle}}
      onPress={props.onPress}>
      <Text style={{...styles.buttonText, ...props.textStyle}}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    margin: 5,
    width: 300,
    maxWidth: '95%',
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.secondary,
    fontSize: 18,
    textAlign: 'center',
  },
});
