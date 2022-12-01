import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image 
          style={styles.logo} 
          source={require('../img/logo.png')}
          resizeMode='contain' 
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.headerText}>
          Little Lemon
        </Text>
      </View>
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
  // image: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 20,
  // },
});

   