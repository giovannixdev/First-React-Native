import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, useColorScheme } from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.container, {backgroundColor: colorScheme === 'dark' ? 'black' : 'white'}]}>
      <View style={styles.headerWrapper}>
        <Image 
          style={styles.logo} 
          source={require('../img/logo.png')}
          resizeMode='cover' 
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={[styles.headerText, colorScheme === 'light'
          ? { color: '#333333' }
          : { color: '#EDEFEE' }]}>
          Little Lemon
        </Text>
      </View>
      <Text style={[styles.bodyText, colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' }]}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>
      <Text style={styles.regular}>Color Scheme: {colorScheme}</Text> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  logo: {
    height: 100,
    width: 100,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
  },
  bodyText: {
    padding: 20,
    fontSize: 26,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  // image: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 20,
  // },
});

   