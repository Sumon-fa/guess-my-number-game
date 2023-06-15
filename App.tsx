import {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  let screen = <StartGameScreen setUserNumber={setUserNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[colors.primary600, colors.accent500]}
      style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/image/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
