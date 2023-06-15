import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

interface StartGameScreenProps {
  setUserNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
  setGameIsOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const StartGameScreen = ({
  setUserNumber,
  setGameIsOver,
}: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99',
        [{text: 'okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    setUserNumber(chosenNumber);
    setGameIsOver(false);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={text => setEnteredNumber(text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 28,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
