import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, ScrollView, Switch, TextInput } from 'react-native';

const mostrarAlerta = (titulo, mensaje) => {
  Alert.alert(titulo, mensaje);
};

export default function App() {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const siNo = (valor) => (valor ? 'Sí' : 'No');

  const enviarRegistro = () => {
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      mostrarAlerta('Campos incompletos', 'Por favor, complete todos los campos antes de enviar.');
      return;
    }
    
    if (!/^\d+$/.test(semestre.trim())) {
      mostrarAlerta('Semestre inválido', 'El semestre debe ser un número.');
      return;
    }

    const mensaje = `Nombre: ${nombre.trim()}\nCarrera: ${carrera.trim()}\nSemestre: ${semestre.trim()}\nTaller: ${siNo(taller)}\nConstancia: ${siNo(constancia)}\nDeportes: ${siNo(deportes)}`;
    mostrarAlerta('Registro enviado', mensaje);

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        keyboardType="numeric"
        value={semestre}
        onChangeText={setSemestre}
      />

      <Text style={styles.subtitulo}>Opciones:</Text>

      <View style={styles.fila}>
        <Text style={styles.pregunta}>¿Asistiras al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>
      <View style={styles.fila}>
        <Text style={styles.pregunta}>¿Requieres constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>
      <View style={styles.fila}>
        <Text style={styles.pregunta}>¿Participarás en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <View style={styles.boton}>
        <Button title="Enviar Registro" onPress={enviarRegistro} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
    fontSize: 16,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 12,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  pregunta: {
    fontSize: 16,
  },
  boton: {
    marginTop: 20,
  },
});
