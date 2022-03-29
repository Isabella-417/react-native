import {FlatList, StyleSheet, View} from 'react-native';

import {CATEGORIES} from '../../src/data/dummy';
import CategoryGridTile from '../../src/components/CategoryGridTile';
import Constants from '../../src/constants';
import React from 'react';
import {useDimensions} from '../../src/hooks/useDimensions';

export default function Category({navigation}) {
  const renderItem = ({item}) => {
    const onPressHandler = () => {
      navigation.navigate(Constants.MEALS_HOME_SCREEN, {categoryId: item.id});
    };

    const {title, color} = item;
    return (
      <CategoryGridTile title={title} color={color} onPress={onPressHandler} />
    );
  };

  const screenInfo = useDimensions();
  return (
    <View style={{...styles.mainContainer, margin: screenInfo.width * 0.02}}>
      <FlatList data={CATEGORIES} renderItem={renderItem} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
  },
});
