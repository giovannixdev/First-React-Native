import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems3 from './components/MenuItems3';
import LoginScreen from './LoginScreen';
import WelcomeScreen2 from './components/WelcomeScreen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
        {/* <LittleLemonHeader /> */}
          <Drawer.Navigator 
            useLegacyImplementation 
            // screenOptions={{ drawerPosition: "right" }}
            initialRouteName='Login'>
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
          </Drawer.Navigator>
          {/* <LittleLemonFooter/> */}
        </View>
      </NavigationContainer>
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

