import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button, ScrollView, Switch, TextInput} from 'react-native';
import{Encabezado} from './components/Encabezado';
import{TarjetaActvidad} from './components/TarjetaActividad';
export default function App() {
 
  return (
    <View style={styles.container}>
      <TarjetaActvidad Estudiar="Estudiar React native" Realizar="Realizar la practica de js" Entregar="Entregar proyecto"/>
    </View>

    /*<View style={styles.container}>
      <Text style= {styles.titulo} >Mi dia universitario</Text>
          <Perfil style={styles.tarjeta1} nombre="Estudiar React native" carrera="ITIID" materia="Movil" cuatri="4" />
            <Perfil style={styles.tarjeta2} nombre= "REalizar la practica de js" carrera="ITIID" materia="Movil" cuatri="4"/>
            <Perfil style={styles.tarjeta3} nombre= "Entregar proyecto" carrera="ITIID" materia="Movil" cuatri="4"/>
      
          </View>*/

        );
      
}





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
