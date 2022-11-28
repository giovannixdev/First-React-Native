import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Welcome to Little Lemon
      </Text>
      <Text style={styles.bodyText}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  headerText: {
    padding: 36,
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  bodyText: {
    padding: 40,
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
  },
});

   