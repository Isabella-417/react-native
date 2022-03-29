import {CATEGORIES, MEALS} from '../../src/data/dummy';
import {FlatList, View} from 'react-native';
import React, {useLayoutEffect} from 'react';

import MealItem from '../../src/components/MealItem';

export default function Meal({route, navigation}) {
  const {categoryId} = route.params;

  const selectedCategory = MEALS.filter(category =>
    category.categoryIds.includes(categoryId),
  );

  useLayoutEffect(() => {
    const categorySelected = CATEGORIES.find(el => el.id === categoryId);

    navigation.setOptions({
      title: categorySelected.title,
    });
  }),
    [categoryId, navigation];

  const renderItem = ({item}) => {
    const {id, title, imageUrl, duration, complexity, affordability} = item;
    return (
      <MealItem
        id={id}
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    );
  };

  return (
    <View>
      <FlatList data={selectedCategory} renderItem={renderItem} />
    </View>
  );
}
