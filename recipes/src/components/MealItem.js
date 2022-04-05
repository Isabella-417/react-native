import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';

import Colors from '../constants/colors';
import Constants from '../constants';
import MealDetail from '../components/MealDetail';
import React from 'react';
import {selectMeal} from '../../src/store/actions/meal.action';
import {useNavigation} from '@react-navigation/native';

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const props = {
    duration: duration,
    complexity: complexity,
    affordability: affordability,
  };

  const selectMealHandler = id => {
    dispatch(selectMeal(id));
    navigation.navigate(Constants.MEALS_DETAIL_SCREEN, {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={() => selectMealHandler(id)}
        style={({pressed}) => [{flex: 1, opacity: pressed ? 0.5 : null}]}
        android_ripple={{color: Colors.rippleColor}}>
        <View style={styles.mainContainer}>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail {...props} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  mainContainer: {},
  mealItem: {
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 20,
    backgroundColor: Colors.whiteColor,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: Colors.blackColor,
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
export default connect()(MealItem);
