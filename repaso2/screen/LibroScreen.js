// 1. Importaciones
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, ImageBackground, ActivityIndicator, Alert } from 'react-native';

// 2. Componente principal
export default function LibrosScreen() {
  // Estados
  const [cargandoInicio, setCargandoInicio] = useState(true);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  // Temporizador del Splash Screen (2 segundos)
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargandoInicio(false);
    }, 2000);

    return () => clearTimeout(temporizador);
  }, []);

  // 3. Función para agregar un libro
  const agregarLibro = () => {
    // Validar campos vacíos
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    // Simular espera de 4 segundos
    setGuardando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      setLibros([...libros, nuevoLibro]);

      // Limpiar los TextInput
      setTitulo('');
      setAutor('');
      setGenero('');

      setGuardando(false);
      Alert.alert('Éxito', 'Libro guardado correctamente.');
    }, 4000);
  };

  // 4. Pantalla de bienvenida (Splash Screen)
  if (cargandoInicio) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashTitle}>📚</Text>
        <Text style={styles.splashTitle}>Registro de Libros</Text>
        <Text style={styles.splashDescription}>repaso2</Text>
      </View>
    );
  }

  // 5. Pantalla principal
  return (
    <ImageBackground
      source={require('../assets/Satoru.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.contenedor}>
        <Text style={styles.title}>Catálogo de Libros</Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Género"
          value={genero}
          onChangeText={setGenero}
        />

        <Pressable
          style={[styles.button, guardando && styles.buttonDisabled]}
          onPress={agregarLibro}
          disabled={guardando}
        >
          <Text style={styles.buttonText}>Agregar Libro</Text>
        </Pressable>

        {guardando && (
          <View style={styles.cargando}>
            <ActivityIndicator size="large" color="#FFFFFF" />
            <Text style={styles.cargandoTexto}>Guardando...</Text>
          </View>
        )}

        <Text style={styles.total}>Total de libros: {libros.length}</Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitulo}>{item.titulo}</Text>
              <Text style={styles.cardTexto}>Autor: {item.autor}</Text>
              <Text style={styles.cardTexto}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

// 6. Estilos
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  splashDescription: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
  },
  background: {
    flex: 1,
    width: '100%',
  },
  contenedor: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cargando: {
    alignItems: 'center',
    marginTop: 15,
  },
  cargandoTexto: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 16,
  },
  total: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  cardTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardTexto: {
    fontSize: 14,
    marginTop: 2,
  },
});