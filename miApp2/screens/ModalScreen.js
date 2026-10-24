/* 1. Zona Importaciones*/
import { StyleSheet, View, Text} from 'react-native';

/* 2. Zona Render o Main*/
export default function ModalScreen() {
  return (
    <View style={styles.container}>

      <Text> Practica 15 </Text>
      <Text> Daniela </Text>

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