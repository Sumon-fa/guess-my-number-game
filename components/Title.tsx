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
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
  },
});