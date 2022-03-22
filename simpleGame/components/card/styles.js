import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: '5%',
    color: '#4a4e69',
  },
});
