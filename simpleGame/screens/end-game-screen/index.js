import {Button, Image, ScrollView, Text, View} from 'react-native';
import {GAMEOVER, LOSE, MACHINE, ME, REPEAT, WIN} from '../../constants';

import Colors from '../../constants/colors';
import React from 'react';
import {results} from '../../utils';
import {styles} from './style';

const images = {
  scissors: require('../../assets/images/scissors.png'),
  rock: require('../../assets/images/rock.png'),
  paper: require('../../assets/images/paper.png'),
};

export default function index({choosen, repeat}) {
  const result = results(choosen);

  const selectedColor =
    result.results === LOSE
      ? Colors.loseColor
      : result.results === WIN
      ? Colors.winColor
      : Colors.tieColor;

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.gameOver}>{GAMEOVER}</Text>
      </View>
      <View style={styles.gameInfoContainer}>
        <View style={styles.finalResultContainer}>
          <Text style={{...styles.scoreText, color: selectedColor}}>
            {result.results}
          </Text>
        </View>
        <View style={styles.scoreContainer}>
          <View>
            <Image style={styles.imageSizes} source={images[result.choosen]} />
            <Text>{ME}</Text>
          </View>
          <View>
            <Image
              style={styles.imageSizes}
              source={images[result.machineChoosen]}
            />
            <Text>{MACHINE}</Text>
          </View>
        </View>
        <View style={styles.options}>
          <Button title={REPEAT} onPress={repeat} />
        </View>
      </View>
    </ScrollView>
  );
}
