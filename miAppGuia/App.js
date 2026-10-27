/* 1. Zona Importaciones*/
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import PruebaScreen from './screens/PruebaScreen';
import SafeScreen from './screens/SafeScreen';

/* 2. Zona Render o Main*/
export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      {/*<PruebaScreen />*/}
      *<SafeScreen />
    </View>
    </SafeAreaProvider>
  );
}

/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
