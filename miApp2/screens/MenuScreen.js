
/* 1. Zona Importaciones*/
import { StyleSheet, View, Text, Button} from 'react-native';
import { useState } from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageScreen from './ImageScreen';
import ModalScreen from './ModalScreen';
import ActivityScreen from './ActivityScreen';

/* 2. Zona Render o Main*/
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen />;
        case 'safe':
            return <SafeScreen />;
        case 'pressable':
            return <PressableScreen />;
        case 'textinput':
            return <TextInputScreen />;
        case 'flatlist':
            return <FlatListScreen />;
        case 'image':
            return <ImageScreen />;
        case 'modal':
            return <ModalScreen />;
        case 'activity':
            return <ActivityScreen />;
        case 'menu':
            default:
                return (
                <View style={styles.container}>
                    <Text> Menu de Praticas </Text>
                    <Button title="Pract:Tarjetas" onPress={ () =>setScreen('tarjetas')}>  </Button>
                    <Button title="Pract:SafeAreaView" onPress={ () =>setScreen('safe')}>  </Button>
                    <Button title="Pract:Pressable" onPress={ () =>setScreen('pressable')}>  </Button>
                    <Button title="Pract:TextInput" onPress={ () =>setScreen('textinput')}>  </Button>
                    <Button title="Pract:FlatList" onPress={ () =>setScreen('flatlist')}>  </Button>
                    <Button title="Pract:Image" onPress={ () =>setScreen('image')}>  </Button>
                    <Button title="Pract:Modal" onPress={ () =>setScreen('modal')}>  </Button>
                    <Button title="Pract:ActivityIndicator" onPress={ () =>setScreen('activity')}>  </Button>

                </View>
          );
    }//switch
}//funcion

/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

});
