import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

interface TextProps {
  children: any;
  style: any;
}

const TextTitle: React.FC<TextProps> = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    margin: 5,
    color: colors.primary,
    fontWeight: 'bold'
  },
});

export default TextTitle;
