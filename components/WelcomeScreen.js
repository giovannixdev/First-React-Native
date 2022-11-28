import { View, Text, ScrollView } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 0.8 }}>
      <ScrollView
        indicatorStyle={"white"}
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "black",
        }}>
        <Text style={{
          padding: 48,
          fontSize: 48,
          color: 'white',
          textAlign: 'center',
        }}>
          Welcome to Little Lemon
        </Text>
        <Text style={{
          marginVertical: 8,
          padding: 40,
          fontSize: 40,
          color: 'white',
          textAlign: 'center',
        }}>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}