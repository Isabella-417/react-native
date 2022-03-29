import {StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/colors';
import React from 'react';

export default function ListItems({title, data}) {
  return (
    <View contentContainerStyle={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.listContainer}>
        {data.map(item => (
          <Text key={item} style={styles.description} numberOfLines={4}>
            - {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    marginVertical: 5,
    color: Colors.whiteColor,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mainContainer: {
    width: '100%',
    marginVertical: 10,
  },
  listContainer: {
    marginHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.blackColor,
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomColor: Colors.blackColor,
    borderBottomWidth: 2,
  },
});
