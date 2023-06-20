import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Title from '../components/Title';
import colors from '../constants/colors';

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over !</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/image/success.png')}
        />
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: colors.primary800,
    margin: 36,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
