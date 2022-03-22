import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import EndGameScreen from './screens/end-game-screen';
import StartGameScreen from './screens/start-game-screen';

const App = () => {
  const [choosenTool, setChoosenTool] = useState('');
  const onHandleChangeTool = toolName => {
    setChoosenTool(toolName);
  };
  const onHandleRepeat = () => {
    setChoosenTool('');
  };

  let content = <StartGameScreen chooseTool={onHandleChangeTool} />;
  if (choosenTool !== '') {
    content = <EndGameScreen choosen={choosenTool} repeat={onHandleRepeat} />;
  }

  return <SafeAreaView style={styles.mainContainer}>{content}</SafeAreaView>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default App;
