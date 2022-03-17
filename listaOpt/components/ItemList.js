import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

export default function ItemList({item}, onHandlerModal, markItemAsChecked) {
  return (
    <TouchableOpacity
      style={{
        ...styles.mainContainer,
        backgroundColor: item.background,
      }}
      onPress={() => markItemAsChecked(item.key)}
      key={item.key}>
      <View
        style={{
          ...styles.itemContainer,
          opacity: item.opacity,
        }}>
        <Text
          numberOfLines={2}
          style={{textDecorationLine: item.checked ? 'line-through' : 'none'}}>
          {item.title}
        </Text>
        {!item.checked && (
          <Button title="Remove" onPress={() => onHandlerModal(item.key)} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 5,
    marginVertical: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
