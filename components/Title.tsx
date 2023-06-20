import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({children}: TitleProps) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
