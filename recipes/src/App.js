import 'react-native-gesture-handler';

import {Navigation} from './navigation';
import {Provider} from 'react-redux';
import React from 'react';
import {StatusBar} from 'react-native';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Navigation />
    </Provider>
  );
};

export default App;
