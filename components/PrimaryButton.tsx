import {Text, View} from 'react-native';

interface PrimaryButtonProps {
  children: React.ReactNode;
}

const PrimaryButton = ({children}: PrimaryButtonProps) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
