import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import Title from '../components/Title';
import colors from '../constants/colors';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

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
  onGameOver: () => void;
}
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}: GameScreenProps) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction: string) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
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
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>
            +
          </PrimaryButton>
        </View>
      </Card>
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
