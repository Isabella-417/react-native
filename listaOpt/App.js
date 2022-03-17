import {
  Button,
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Colors from './constants/colors';
import ItemList from './components/ItemList';

const App = () => {
  const [textTyped, setTextTyped] = useState('');
  const [listItems, setListItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const onHandlePress = () => {
    if (textTyped) {
      setListItems(prevList => [
        ...prevList,
        {
          key: Math.random() * (99 - 1) + 1,
          checked: false,
          title: textTyped,
          background: '#ffffff',
          opacity: 1,
        },
      ]);
      setTextTyped('');
    }
  };

  const removeListItem = key => {
    const newList = listItems.filter(el => key !== el.key);
    setListItems(newList);
    setVisible(false);
  };

  const markItemAsChecked = key => {
    const newList = listItems.map(el => {
      if (el.key === key) {
        el.background = '#f0efeb';
        el.checked = true;
        el.opacity = 0.2;
      }
      return el;
    });
    setListItems(newList);
  };

  const onHandlerModal = id => {
    const item = listItems.find(el => el.key === id);
    setSelectedItem(item);
    setVisible(prevValue => !prevValue);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#edf2f4'}}>
      <Text style={styles.title}>To DO List</Text>
      <View style={styles.containerOptions}>
        <TextInput
          autoCorrect={false}
          autoFocus={true}
          style={styles.containerInput}
          onChangeText={text => setTextTyped(text)}
          value={textTyped}
        />
        <Button title="Add Item" onPress={onHandlePress} />
      </View>
      <FlatList
        data={listItems}
        contentContainerStyle={{marginHorizontal: '5%'}}
        renderItem={item => ItemList(item, onHandlerModal, markItemAsChecked)}
      />
      <Modal animationType="fade" visible={visible}>
        <View style={styles.centeredView}>
          <View>
            <Text style={styles.modalMessage} numberOfLines={2}>
              Are you sure you want to delete{' '}
              <Text style={styles.highlightItem}> {selectedItem.title} </Text>{' '}
              item ?
            </Text>
            <View style={styles.buttonOptions}>
              <Button title="Cancel" onPress={() => setVisible(false)} />
              <Button
                title="Remove"
                onPress={() => removeListItem(selectedItem.key)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalMessage: {
    fontSize: 15,
    paddingVertical: '3%',
  },
  highlightItem: {
    fontWeight: 'bold',
    color: '#e63946',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  containerInput: {
    borderBottomColor: '#8d99ae',
    borderBottomWidth: 1,
    width: '50%',
  },
  containerOptions: {
    paddingVertical: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
});

export default App;
