
/* 1. Zona Importaciones*/
import { StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';

/* 2. Zona Render o Main*/
export default function SafeScreen() {

    const canciones =[ 
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ];
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.titulo}> MUSICA PLAY</Text>

          <View style={styles.reproductor}>
            <Text style={styles.texto}>Lista de musica</Text>
            <Text>La musica mas escuchda</Text>
          </View>

          <Text style={styles.subtitulo}>Canciones disponibles</Text>

          <ScrollView style={styles.lista}
          contentContainerStyle={styles.contenidoLista}
          showsVerticalScrollIndicator={true}>
            {canciones.map((item, index)=> (
              <View key={index} style={styles.tarjeta}>
                <Text style={styles.textoLista}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
  );
}

/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo:{
    fontSize: 26,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  reproductor:{
    backgroundColor: 'lightgreen',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center'
  },
  texto:{
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  lista:{
    flex: 1,
  },
  tarjeta:{
    backgroundColor: 'pink',
    padding: 20,
    marginBottom: 10,
    borderRadius: 15,
  },
  textoLista:{
    fontSize: 18,
    textAlign: 'center',
  },
});
