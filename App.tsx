import React, {useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import MainNavigation from './navigation/MainNavigation';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar />
      <MainNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
