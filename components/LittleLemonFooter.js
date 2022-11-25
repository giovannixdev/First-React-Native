import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{ flex: 0.10, backgroundColor: '#F4CE14' }}>
      <Text style={{
        padding: 40,
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        bottom: 0
      }}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}

