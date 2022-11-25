import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 0.8 }}>
      <Text style={{
        padding: 48,
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
      }}>
        Welcome to Little Lemon
      </Text>
      <Text style={{
        padding: 40,
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
      }}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
    </View>
  );
}