import {StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/colors';
import React from 'react';

export default function MealDetail({duration, complexity, affordability}) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.description}>{duration} min </Text>
      <Text style={styles.description}>{complexity.toUpperCase()}</Text>
      <Text style={styles.description}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  description: {
    color: Colors.blackColor,
    fontWeight: 'bold',
  },
});
