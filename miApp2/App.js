
/* 1. Zona Importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
/* import{Saludo} from './components/Saludo';
import{Saludo2} from './components/Saludo2'; */
import{Perfil} from './components/Perfil';

/* 2. Zona Render o Main*/
export default function App() {
  return (
    <View style={styles.container}>
     {/*  <Text>Hola Mundo React Native!</Text> */}
      {/* <Image source={require('./assets/wave.png')}></Image>
      <Text>---------------------------------</Text>
      <Saludo></Saludo>
      <Saludo/>
      <Text>---------------------------------</Text>
      <Saludo2></Saludo2>
      <Saludo2/>
      <Text>---------------------------------</Text> */}
      
      <Perfil style={styles.tarjeta1} nombre="Lulu" carrera="ITIID" materia="Movil" cuatri="4" />
      <Perfil style={styles.tarjeta2} nombre= "Renata" carrera="ITIID" materia="Movil" cuatri="4"/>
      <Perfil style={styles.tarjeta3} nombre= "Luisa" carrera="ITIID" materia="Movil" cuatri="4"/>

      <StatusBar style="auto" />
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
    justifyContent: 'center',
  },
  tarjeta1:{backgroundColor: 'lightgreen'},
  tarjeta2:{backgroundColor: 'lightpink'},
  tarjeta3:{backgroundColor: 'lightyellow'},

});
