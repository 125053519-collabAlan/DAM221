
/* 1. Zona Importaciones*/
import { StyleSheet, View, Text} from 'react-native';

/* 2. Zona Render o Main*/
export default function SafeScreen() {
  return (
    <View style={styles.container}>

      <Text> Practica 10 </Text>
      <Text> Diego o Saul </Text>

    </View>
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
