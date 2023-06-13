import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import colors from '../constants/colors';
interface StartGameScreenProps {
  setUserNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const StartGameScreen = ({setUserNumber}: StartGameScreenProps) => {
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
  }
  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary500,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
