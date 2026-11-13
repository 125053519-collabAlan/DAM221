
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, ScrollView, Switch, TextInput} from 'react-native';
 export const TarjetasActividad=({Estudiar, Realizar, Entregar})=> {
    const [mostrar, setMostrar] = useState(false);
    return (
    <View style={styles.container}>
        {mostrar && 
        <>
        <Text style= {styles.titulo} >{Estudiar}</Text>
        <Text style= {styles.titulo} >{Realizar}</Text>
        <Text style= {styles.titulo} >{Entregar}</Text>
        </>
        }
        <Button title={mostrar ? "Ocultar" : "Mostrar"} onPress={() => setMostrar(!mostrar)} />
    </View>
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