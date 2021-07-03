import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextTitle from '../components/TextTitle';
import {MainRoutes} from '../navigation/routes';
import {MainNavigationProp, MainNavigationRouteProp} from '../navigation/types';

type ScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Main>;
  route: MainNavigationRouteProp;
};

const CarScreen: React.FC<ScreenProps> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextTitle style>ID: </TextTitle>
        <Text>{route.params?.item.id}</Text>
      </View>
      <View style={styles.row}>
        <TextTitle style>Model: </TextTitle>
        <Text>{route.params?.item.model}</Text>
      </View>
      <View style={styles.row}>
        <TextTitle style>Color: </TextTitle>
        <Text>{route.params?.item.color}</Text>
      </View>
      <View style={styles.row}>
        <TextTitle style>Year: </TextTitle>
        <Text>{route.params?.item.year}</Text>
      </View>
      <View style={styles.row}>
        <TextTitle style>Rating: </TextTitle>
        <Text>{route.params?.item.rating}</Text>
      </View>
      <View style={styles.row}>
        <TextTitle style>Description: </TextTitle>
        <Text>{route.params?.item.description}</Text>
      </View>
    </View>
  );
};

export default CarScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
});
