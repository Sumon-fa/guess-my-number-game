import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Title from '../components/Title';
import colors from '../constants/colors';

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      {/*<View>LOG ROUNDS</View>*/}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12,
  },
});
