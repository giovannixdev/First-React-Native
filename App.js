import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems3 from './components/MenuItems3';
import LoginScreen from './LoginScreen';
import WelcomeScreen2 from './components/WelcomeScreen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <LittleLemonHeader/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    <LittleLemonFooter/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

