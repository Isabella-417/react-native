import {Button, Image, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';

import Card from '../../components/card';
import Colors from '../../constants/colors';
import {styles} from './style';

const images = {
  scissors: require('../../assets/images/scissors.png'),
  rock: require('../../assets/images/rock.png'),
  paper: require('../../assets/images/paper.png'),
};

export default function index({chooseTool}) {
  const [selectedItem, setSelectedItem] = useState({
    scissors: false,
    rock: false,
    paper: false,
  });

  const [isSelected, setIsSelected] = useState(false);

  const onHandleSelectItem = nameSelected => {
    setIsSelected(true);
    setSelectedItem({
      scissors: false,
      rock: false,
      paper: false,
    });
    setSelectedItem(prev => {
      return {...prev, [nameSelected]: true};
    });
  };

  const onHandleStartGame = () => {
    if (isSelected) {
      const keys = Object.keys(selectedItem);
      let choosen;
      keys.forEach(key => {
        if (selectedItem[key]) {
          choosen = key;
        }
      });
      chooseTool(choosen);
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.mainTitle}>
        <Text style={styles.textFormat}>
          Choose one tool for starting the game... 🥁 🥁
        </Text>
      </View>
      <View style={styles.cardsContainer}>
        <Card
          description="scissors"
          onHandleSelectItem={onHandleSelectItem}
          style={{
            backgroundColor: selectedItem.scissors
              ? Colors.white
              : Colors.green,
          }}>
          <Image style={styles.imageSizes} source={images.scissors} />
        </Card>
        <Card
          description="paper"
          onHandleSelectItem={onHandleSelectItem}
          style={{
            backgroundColor: selectedItem.paper ? Colors.white : Colors.yellow,
          }}>
          <Image style={styles.imageSizes} source={images.paper} />
        </Card>
        <Card
          description="rock"
          onHandleSelectItem={onHandleSelectItem}
          style={{
            backgroundColor: selectedItem.rock ? Colors.white : Colors.orange,
          }}>
          <Image style={styles.imageSizes} source={images.rock} />
        </Card>
      </View>
      <View style={styles.options}>
        <Button title="Start Game" onPress={onHandleStartGame} />
      </View>
    </ScrollView>
  );
}
