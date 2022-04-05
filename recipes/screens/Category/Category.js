import {FlatList, StyleSheet, View} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';

import {CATEGORIES} from '../../src/data/dummy';
import CategoryGridTile from '../../src/components/CategoryGridTile';
import Constants from '../../src/constants';
import React from 'react';
import {selectCategory} from '../../src/store/actions/category.action';
import {useDimensions} from '../../src/hooks/useDimensions';

function Category({navigation}) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const screenInfo = useDimensions();

  const renderItem = ({item}) => {
    const onPressHandler = () => {
      dispatch(selectCategory(item.id));
      navigation.navigate(Constants.MEALS_HOME_SCREEN, {name: item.name});
    };

    const {title, color} = item;
    return (
      <CategoryGridTile title={title} color={color} onPress={onPressHandler} />
    );
  };

  return (
    <View style={{...styles.mainContainer, margin: screenInfo.width * 0.02}}>
      <FlatList data={categories} renderItem={renderItem} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
});

export default connect()(Category);
