import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  imageSizes: {
    width: 110,
    height: 115,
  },
  finalResultContainer: {
    alignItems: 'center',
    marginVertical: '10%',
  },
  gameInfoContainer: {
    marginVertical: '25%',
  },
  gameOver: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  mainContainer: {
    flex: 1,
    height: '25%',
    width: '95%',
  },
  options: {
    paddingVertical: '15%',
  },
  titleContainer: {
    alignItems: 'center',
    paddingVertical: '15%',
    backgroundColor: '#907ad6',
    width: '100%',
  },
});
