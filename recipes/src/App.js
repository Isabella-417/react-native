import 'react-native-gesture-handler';

import {Navigation} from './navigation';
import React from 'react';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
};

export default App;
