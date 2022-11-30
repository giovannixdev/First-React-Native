import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems2 from './components/MenuItems2';

export default function App() {
  return (
    <View
      style={styles.container}>
      <LittleLemonHeader />
      {/* <WelcomeScreen /> */}
      {/* <MenuItems /> */}
      <MenuItems2 />
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

