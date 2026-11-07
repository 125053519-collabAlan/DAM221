import { StyleSheet, Text, View } from 'react-native';
import LibroScreen from './screen/LibroScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LibroScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
