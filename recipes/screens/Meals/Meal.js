import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

import MealItem from '../../src/components/MealItem';
import {filteredMeals} from '../../src/store/actions/meal.action';

function Meal({navigation}) {
  const dispatch = useDispatch();
  const categoryProducts = useSelector(state => state.meals.filteredMeals);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory,
  );

  useEffect(() => {
    dispatch(filteredMeals(selectedCategory.id));

    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, []);

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
      <FlatList data={categoryProducts} renderItem={renderItem} />
    </View>
  );
}

export default connect()(Meal);
