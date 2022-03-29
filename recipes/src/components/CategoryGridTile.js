import {StyleSheet, Text, View} from 'react-native';

import Colors from '../constants/colors';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import React from 'react';
import {useDimensions} from '../hooks/useDimensions';

export default function CategoryGridTile({title, color, onPress}) {
  const screenInfo = useDimensions();

  return (
    <View
      style={{
        ...styles.mainContainer,
        width: screenInfo.width * 0.4,
        height: screenInfo.height * 0.2,
        margin: screenInfo.width * 0.05,
        overflow: 'hidden',
      }}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [{flex: 1, opacity: pressed ? 0.5 : null}]}
        android_ripple={{
          color: Colors.rippleColor,
        }}>
        <View style={{...styles.innerContainer, backgroundColor: color}}>
          <Text style={styles.titleContainer}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 15,
  },
  pressContainer: {flex: 1},
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    fontWeight: 'bold',
  },
});
