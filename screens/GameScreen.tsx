import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import Title from '../components/Title';
import colors from '../constants/colors';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

interface GameScreenProps {
  userNumber: number;
}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({userNumber}: GameScreenProps) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greter' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'you know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>
            +
          </PrimaryButton>
        </View>
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
