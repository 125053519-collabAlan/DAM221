// =====================================================================
// REFERENCIA DE COMPONENTES - React Native 
// Cada bloque dice: QUÉ ES (qué hace el componente) y CÓMO SE APLICA
// (el patrón de uso).
// =====================================================================

// ---------------------------------------------------------------------
// 1. IMPORTACIONES
// QUÉ ES: hay que importar cada componente que se use; si falta uno,
//         la app marca error al abrir.
// CÓMO SE APLICA: hooks desde 'react' y componentes desde 'react-native'.
// ---------------------------------------------------------------------
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  View,
  Text,
  TextInput,
  Pressable,
  Switch,
  FlatList,
  ActivityIndicator,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
  StyleSheet,
} from 'react-native';

// ---------------------------------------------------------------------
// 2. DATOS INICIALES
// QUÉ ES: un arreglo de objetos. Cada objeto necesita un id único
//         (lo usa keyExtractor de la FlatList).
// CÓMO SE APLICA: se guarda como valor inicial de un useState.
// ---------------------------------------------------------------------
const DATOS_INICIALES = [
  { id: '1', titulo: 'Entregar práctica', completada: false },
  { id: '2', titulo: 'Estudiar para el examen', completada: true },
  { id: '3', titulo: 'Subir proyecto al repositorio', completada: false },
];

export default function Pantalla() {
  // -------------------------------------------------------------------
  // 3. ESTADOS (useState)
  // QUÉ ES: la memoria de la pantalla. Cuando un estado cambia, la
  //         pantalla se vuelve a dibujar sola.
  // CÓMO SE APLICA: const [valor, setValor] = useState(inicial);
  //         Nunca se modifica el valor directo, siempre con setValor.
  // -------------------------------------------------------------------
  const [cargandoInicio, setCargandoInicio] = useState(true); // splash
  const [items, setItems] = useState(DATOS_INICIALES);         // lista
  const [texto, setTexto] = useState('');                      // input
  const [soloPendientes, setSoloPendientes] = useState(false); // switch
  const [guardando, setGuardando] = useState(false);           // spinner

  // -------------------------------------------------------------------
  // 4. USEEFFECT + SETTIMEOUT (pantalla de bienvenida / Splash)
  // QUÉ ES: useEffect ejecuta código cuando la pantalla aparece.
  //         setTimeout espera un tiempo (en milisegundos).
  // CÓMO SE APLICA: el [] del final hace que corra solo una vez.
  //         El return con clearTimeout limpia el temporizador.
  // -------------------------------------------------------------------
  useEffect(() => {
    const temporizador = setTimeout(() => setCargandoInicio(false), 2000);
    return () => clearTimeout(temporizador);
  }, []);

  // -------------------------------------------------------------------
  // 5. CÁLCULOS A PARTIR DEL ESTADO (no necesitan useState propio)
  // QUÉ ES: valores que se derivan de otros estados.
  // CÓMO SE APLICA: se calculan en cada render con filter / length.
  //         Cuidado con dividir entre 0 cuando la lista está vacía.
  // -------------------------------------------------------------------
  const total = items.length;
  const completadas = items.filter((i) => i.completada).length;
  const progreso = total === 0 ? 0 : Math.round((completadas / total) * 100);

  // Lo que realmente se muestra depende del Switch
  const visibles = soloPendientes ? items.filter((i) => !i.completada) : items;

  // -------------------------------------------------------------------
  // 6. FUNCIONES
  // -------------------------------------------------------------------

  // CAMBIAR UN ELEMENTO DEL ARREGLO (marcar / desmarcar)
  // QUÉ ES: para modificar un objeto de la lista se crea un arreglo nuevo.
  // CÓMO SE APLICA: map recorre la lista; si el id coincide, devuelve
  //         una copia del objeto con el valor invertido.
  const alternarCompletada = (id) => {
    setItems(
      items.map((i) => (i.id === id ? { ...i, completada: !i.completada } : i))
    );
  };

  // AGREGAR UN ELEMENTO
  // QUÉ ES: validar, esperar (simulado) y agregar al arreglo.
  // CÓMO SE APLICA: Alert para avisar, spinner mientras espera,
  //         [...items, nuevo] para agregar sin modificar el original.
  const agregar = () => {
    if (!texto.trim()) {
      Alert.alert('Error', 'Escribe un título antes de agregar.');
      return;
    }
    Keyboard.dismiss(); // cierra el teclado
    setGuardando(true);

    setTimeout(() => {
      const nuevo = {
        id: Date.now().toString(), // id único como texto
        titulo: texto.trim(),
        completada: false,
      };
      setItems([...items, nuevo]);
      setTexto('');
      setGuardando(false);
      Alert.alert('Listo', 'Elemento agregado.');
    }, 1500);
  };

  // -------------------------------------------------------------------
  // 7. PANTALLA DE BIENVENIDA (Splash)
  // QUÉ ES: un return anticipado que se muestra mientras carga.
  // CÓMO SE APLICA: va DESPUÉS de los hooks y ANTES del return principal.
  // -------------------------------------------------------------------
  if (cargandoInicio) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashTexto}>Bienvenido</Text>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  // -------------------------------------------------------------------
  // 8. PANTALLA PRINCIPAL
  // -------------------------------------------------------------------
  return (
    // SafeAreaView
    // QUÉ ES: respeta la barra de estado y el notch del teléfono.
    // CÓMO SE APLICA: contenedor raíz con flex: 1.
    <SafeAreaView style={styles.safe}>
      {/* ImageBackground
          QUÉ ES: una imagen de fondo que permite poner otros
                  componentes encima.
          CÓMO SE APLICA: source con la imagen, style={{ flex: 1 }} y
                  resizeMode ("cover" llena la pantalla, "contain" la
                  muestra completa, "stretch" la estira).
          - Imagen local:  source={require('./assets/fondo.jpg')}
            (la ruta cambia según la carpeta: './' o '../' y el nombre
            debe coincidir exacto, con mayúsculas y extensión).
          - Imagen de internet: source={{ uri: 'https://...' }}
          Se pone alrededor del contenido, como un contenedor. */}
      <ImageBackground
        source={{ uri: 'https://picsum.photos/600/1000' }}
        style={styles.flex}
        resizeMode="cover"
      >
      {/* KeyboardAvoidingView
          QUÉ ES: sube el contenido cuando aparece el teclado.
          CÓMO SE APLICA: behavior="padding" y flex: 1. */}
      <KeyboardAvoidingView behavior="padding" style={styles.flex}>
        <View style={styles.contenido}>
          <Text style={styles.titulo}>Mis pendientes</Text>

          {/* Image
              QUÉ ES: muestra una imagen suelta (logo, foto, ícono).
              CÓMO SE APLICA: source igual que ImageBackground, pero
              SIEMPRE con width y height en el estilo (si es de internet
              sin tamaño, no se ve). */}
          <Image
            source={{ uri: 'https://picsum.photos/100' }}
            style={styles.logo}
          />

          {/* PROGRESO
              QUÉ ES: texto + barra que muestra el avance.
              CÓMO SE APLICA: el ancho de la barra interior es el
              porcentaje como texto: `${progreso}%`. */}
          <Text style={styles.progresoTexto}>
            Completadas: {completadas} de {total} ({progreso}%)
          </Text>
          <View style={styles.barraFondo}>
            <View style={[styles.barraRelleno, { width: `${progreso}%` }]} />
          </View>

          {/* Switch
              QUÉ ES: interruptor verdadero / falso.
              CÓMO SE APLICA: value lee el estado, onValueChange lo cambia. */}
          <View style={styles.fila}>
            <Text>Mostrar solo pendientes</Text>
            <Switch value={soloPendientes} onValueChange={setSoloPendientes} />
          </View>

          {/* TextInput
              QUÉ ES: campo para escribir.
              CÓMO SE APLICA: value + onChangeText (controlado).
              placeholder es el texto de ayuda. */}
          <TextInput
            style={styles.input}
            placeholder="Nuevo pendiente"
            value={texto}
            onChangeText={setTexto}
          />

          {/* Pressable
              QUÉ ES: botón personalizable.
              CÓMO SE APLICA: onPress ejecuta la función; disabled lo
              bloquea mientras guarda; el estilo puede cambiar con pressed. */}
          <Pressable
            style={({ pressed }) => [
              styles.boton,
              (pressed || guardando) && styles.botonInactivo,
            ]}
            onPress={agregar}
            disabled={guardando}
          >
            <Text style={styles.botonTexto}>Agregar</Text>
          </Pressable>

          {/* ActivityIndicator
              QUÉ ES: círculo de carga.
              CÓMO SE APLICA: se muestra con {condición && <Componente />}. */}
          {guardando && <ActivityIndicator size="large" color="#2563EB" />}

          {/* FlatList
              QUÉ ES: lista eficiente de elementos.
              CÓMO SE APLICA: data (arreglo), keyExtractor (id único como
              texto) y renderItem (cómo se dibuja cada uno, con ({ item })).
              ListEmptyComponent se muestra cuando no hay datos. */}
          <FlatList
            data={visibles}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text style={styles.vacio}>Sin elementos</Text>}
            renderItem={({ item }) => (
              <Pressable
                style={[styles.card, item.completada && styles.cardCompletada]}
                onPress={() => alternarCompletada(item.id)}
              >
                <Text style={item.completada && styles.tachado}>
                  {item.titulo}
                </Text>
                <Text>{item.completada ? '✔' : '○'}</Text>
              </Pressable>
            )}
          />
        </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------
// 9. ESTILOS (StyleSheet.create)
// QUÉ ES: objeto con los estilos de la pantalla.
// CÓMO SE APLICA: se define fuera del componente, al final del archivo,
//         y se usa con style={styles.nombre}. Varios estilos se combinan
//         en un arreglo: style={[styles.a, condicion && styles.b]}.
// ---------------------------------------------------------------------
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f4f6' },
  flex: { flex: 1 },
  // El fondo oscuro semitransparente ayuda a que el texto se lea sobre la imagen
  contenido: { flex: 1, padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.45)' },
  splash: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashTexto: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, color: '#fff' },
  logo: { width: 60, height: 60, borderRadius: 30, marginBottom: 12 },
  progresoTexto: { marginBottom: 6, color: '#fff' },
  barraFondo: {
    height: 10,
    backgroundColor: '#d1d5db',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 14,
  },
  barraRelleno: { height: 10, backgroundColor: '#22c55e' },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  botonInactivo: { opacity: 0.6 },
  botonTexto: { color: '#fff', fontWeight: 'bold' },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginTop: 10,
  },
  cardCompletada: { backgroundColor: '#dcfce7' },
  tachado: { textDecorationLine: 'line-through', color: '#6b7280' },
  vacio: { textAlign: 'center', marginTop: 20, color: '#6b7280' },
});

// ---------------------------------------------------------------------
// NOTAS RÁPIDAS
// - ScrollView: se usa en lugar de FlatList cuando el contenido es corto
//   y fijo. No metas una FlatList dentro de un ScrollView vertical.
// - SectionList: igual que FlatList pero con sections=[{title, data}]
//   y renderSectionHeader para el título de cada grupo.
// - Alert.alert solo se ve en el teléfono, no en la versión web.
// ---------------------------------------------------------------------