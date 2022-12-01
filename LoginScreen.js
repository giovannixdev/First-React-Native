import React, { useState} from 'react';  
import { ScrollView, Text, View, StyleSheet, TextInput, Pressable } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.headerText}>Login to continue</Text>
      {isLogin ? 
        <Text style={styles.headerText}>You are logged in</Text> : 
        <>
          <TextInput
            value={email}
            style={styles.input}
            placeholder={'Email'}
            keyboard={'email-address'}
            onChangeText={onChangeEmail}
          />
          <TextInput
            value={password}
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={onChangePassword}
          />
          <Pressable
            style={styles.button}
            onPress={() => setIsLogin(!isLogin)}
          >
            <Text style={styles.buttonText}>
              Log in
            </Text>
          </Pressable>
        </>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#F4CE14',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 120,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 10,
    borderRadius: 50
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
});

