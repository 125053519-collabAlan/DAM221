/* 1. Zona Importaciones*/
import {useState} from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
/* 2. Zona Render o Main*/
export default function PruebaScreen() {
    const [posicion, setPosicion] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.titulo}>
        Posición: {Math.round(posicion)}
      </Text>
      <ScrollView contentContainerStyle={{ padding: 16, gap:20 }}
      onScroll={(e) => setPosicion(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={16}>
        <Text style={styles.texto}>Texto 1</Text>
        <Text style={styles.texto}>Texto 2</Text>
        <Text style={styles.texto}>Texto 3</Text>
        <Text style={styles.texto}>Texto 4</Text>
        <Text style={styles.texto}>Texto 5</Text>
        <Text style={styles.texto}>Texto 6</Text>
        <Text style={styles.texto}>Texto 7</Text>
        <Text style={styles.texto}>Texto 8</Text>
        <Text style={styles.texto}>Texto 9</Text>
        <Text style={styles.texto}>Texto 10</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
  },
    texto: {
      fontSize: 80,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 20,
    },
});|