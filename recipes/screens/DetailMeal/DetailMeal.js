import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';

import Colors from '../../src/constants/colors';
import ListItems from '../../src/components/ListItems';
import {MEALS} from '../../src/data/dummy';
import MealDetail from '../../src/components/MealDetail';

export default function DetailMeal({route, navigation}) {
  const {mealId} = route.params;
  const choosenMeal = MEALS.find(meal => meal.id === mealId);
  const {title, imageUrl, steps, ingredients} = choosenMeal;

  const props = {
    duration: choosenMeal.duration,
    complexity: choosenMeal.complexity,
    affordability: choosenMeal.affordability,
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }),
    [title, navigation];

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Text style={styles.title}>{title}</Text>
      <MealDetail {...props} />
      <ListItems title="Ingredients" data={ingredients} />
      <ListItems title="Steps" data={steps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color: Colors.blackColor,
  },
});
