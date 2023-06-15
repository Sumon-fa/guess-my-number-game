import React from 'react';
import {StyleSheet, Text} from 'react-native';

import colors from '../../constants/colors';

interface InstructionTextProps {
  children: React.ReactNode;
}

const InstructionText = ({children}: InstructionTextProps) => {
  return <Text style={styles.insTructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  insTructionText: {
    color: colors.accent500,
    fontSize: 24,
  },
});
