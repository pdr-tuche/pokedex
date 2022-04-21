import { StatusBar } from 'expo-status-bar';
import {Image, Text, View, Pressable} from 'react-native';
import pokebola from '../assets/pokemons/pokebola.png';
import styles from './Style';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Image source = {pokebola} style ={styles.logo}></Image>
      <Text style={styles.pokedex}>POKEDEX</Text>
      <Pressable style={styles.botao} onPress = {()=>{props.navigation.openDrawer()}}>
          <Text>Pokemons descobertos</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
