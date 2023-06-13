import {Pressable, StyleSheet, Text, View} from 'react-native';

import colors from '../constants/colors';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
}

const PrimaryButton = ({children, onPress}: PrimaryButtonProps) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: colors.primary700}}
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary800,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
