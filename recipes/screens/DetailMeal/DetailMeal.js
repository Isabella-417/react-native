import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {connect, useSelector} from 'react-redux';

import Colors from '../../src/constants/colors';
import ListItems from '../../src/components/ListItems';
import {MEALS} from '../../src/data/dummy';
import MealDetail from '../../src/components/MealDetail';

function DetailMeal({route, navigation}) {
  const choosenMeal = useSelector(state => state.meals.selectedMeal);

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

export default connect()(DetailMeal);
