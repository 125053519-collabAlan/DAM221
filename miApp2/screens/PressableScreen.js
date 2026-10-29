/* 1. Zona Importaciones*/
import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Switch} from 'react-native';

/* 2. Zona Render o Main*/
export default function PressableScreen() {
  const [mensaje, setMensaje] = useState('Presiona el boton');
  const [activado, setActivado] = useState('false');
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pressable</Text>

      <Text>{mensaje}</Text>

      <Pressable

      onPress={()=> setMensaje('Boton Presionado bro')}
      onPressIn={()=> console.log('Inicio de la pulsacion bro')}
      onPressOut={()=> console.log('Fin de la pulsasion bro')}
      onLongPress={()=> setMensaje('Pulsasion prolongada')}
      disabled = {false}
      style={({ pressed }) => [
        styles.boton,
        pressed && styles.botonPresionado
      ]}
      >
    <Text style={styles.textoBoton}>Presioname</Text>
    </Pressable>

    <View style={styles.separador}/>

    <Text style={styles.titulo}>Switch</Text>
    <Text>
      Estado : {activado ? 'Activado' : 'Desactivado'}
    </Text>

    <Switch

    value={activado}
    onValueChange={setActivado}
    disabled={false}
    trackColor={{ false: '#92ec7b', true: '#ad9292'}}
    thumbColor={activado ? '#bfb5b5' : '#a0e891'}
    />

  </View>
  );
}

/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2ecec',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#319b80',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  botonPresionado: {
    backgroundColor: '#1e6655',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
  separador: {
    height: 2,
    backgroundColor: '#cccccc',
    width: '90%',
    marginVertical: 35,
  },
});