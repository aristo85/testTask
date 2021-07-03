import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {MainRoutes, MainStackParamList} from './routes';
import {Platform} from 'react-native';
import colors from '../constants/colors';
import CarListScreen from '../screens/CarListScreen';
import CarScreen from '../screens/CarScreen';

export const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTintColor:
          Platform.OS === 'android' ? colors.secondary : colors.third,
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? colors.third : colors.secondary,
        },
      }}>
      <MainStack.Screen
        name={MainRoutes.Main}
        component={CarListScreen}
        options={{headerTitle: 'Car List'}}
      />
      <MainStack.Screen name={MainRoutes.Car} component={CarScreen} />
    </MainStack.Navigator>
  );
};
const MainNavigation: React.FC = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};
export default MainNavigation;
