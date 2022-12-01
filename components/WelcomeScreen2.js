import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';

const Welcome2 = () => {
  const window = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../img/logo.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text style={styles.title}>
        Little Lemon
      </Text>
      <Text style={styles.regular}>Window Dimensions</Text>
      <Text style={styles.regular}>Height: {window.height}</Text>
      <Text style={styles.regular}>Width: {window.width}</Text>
      <Text style={styles.regular}>Font scale: {window.fontScale}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome2;
