import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import {styles} from './styles';

export default function index({
  style,
  description,
  children,
  onHandleSelectItem,
}) {
  return (
    <TouchableOpacity
      style={{paddingVertical: '2%'}}
      onPress={() => {
        onHandleSelectItem(description);
      }}>
      <View style={{...styles.mainContainer, ...style}}>
        {children}
        <Text style={styles.titleText}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
