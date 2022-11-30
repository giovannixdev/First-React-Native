import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Welcome to Little Lemon
      </Text>
      <Text style={styles.bodyText}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
      <TextInput style={styles.input}
        placeholder={'First Name'}
        onChangeText={onChangeFirstName}
        value={firstName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  }, 
  headerText: {
    padding: 36,
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  bodyText: {
    padding: 20,
    fontSize: 26,
    marginVertical: 8,
    color: 'white',
    textAlign: 'center',
  },
});

   