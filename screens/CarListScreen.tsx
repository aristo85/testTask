import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {requestCarList} from '../redux/env/thunk/carThunk';
import {useReduxDispatch, useReduxSelector} from '../redux/hooks';
import Card from '../components/Card';
import {MainNavigationProp} from '../navigation/types';
import {MainRoutes} from '../navigation/routes';
import TextTitle from '../components/TextTitle';
import {ButtonSyled} from '../components/ButtonSyled';
import {sorListtByName, sorListtByRating} from '../redux/env/envSlice';

type ScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Main>;
};

const CarListScreen: React.FC<ScreenProps> = ({navigation}) => {
  const dispatch = useReduxDispatch();
  const carList = useReduxSelector(state => state.env.carList);

  const sortByName = () => {
    dispatch(sorListtByName(null));
  };

  const sortByRating = () => {
    dispatch(sorListtByRating(null));
  };

  const getCarList = async () => {
    return await dispatch(requestCarList(null));
    // if (!requestCarList.fulfilled.match(response)) {
    //   console.log(response)
    // }
  };
  useEffect(() => {
    getCarList();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <TextTitle style>My favorite Cars!</TextTitle>

        {carList.length > 0 ? (
          <View
            style={{
              marginBottom: 50,
              height: Dimensions.get('window').height - 90,
            }}>
            <View style={styles.sortContainer}>
              <ButtonSyled
                bodyStyle={styles.btn}
                textStyle
                onPress={() => sortByName()}>
                Sort by name
              </ButtonSyled>
              <ButtonSyled
                bodyStyle={styles.btn}
                textStyle
                onPress={() => sortByRating()}>
                Sort by rating
              </ButtonSyled>
            </View>
            <FlatList
              data={carList}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate(MainRoutes.Car, {item})}>
                  <Card style>
                    <Text>Model: {item.model}</Text>
                    <Text>Rating: {item.rating}</Text>
                  </Card>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ) : (
          <Text>No data, check server!</Text>
        )}
      </SafeAreaView>
    </View>
  );
};

export default CarListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sortContainer: {
    flexDirection: 'row',
    width: '95%',
  },
  btn: {
    width: '50%',
  },
});
