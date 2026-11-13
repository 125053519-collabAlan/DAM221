import { StyleSheet, Text, View, Alert, Button, ScrollView, Switch, TextInput} from 'react-native';
 export default function TarjetasActividad() {
    return (
    <View style={styles.container}>
        
      <Text style= {styles.titulo} >Mi dia universitario</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
