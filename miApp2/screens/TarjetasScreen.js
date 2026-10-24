/* 1. Zona Importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import{Perfil} from '../components/Perfil';

/* 2. Zona Render o Main*/
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>

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
    justifyContent: 'space-evenly',
  },
  tarjeta1:{backgroundColor: 'lightgreen'},
  tarjeta2:{backgroundColor: 'lightpink'},
  tarjeta3:{backgroundColor: 'lightyellow'},

});
