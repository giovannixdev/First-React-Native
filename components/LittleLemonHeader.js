import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.1 }}>
      <Text
        style={{
          backgroundColor: '#F4CE14',
          padding: 40,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
