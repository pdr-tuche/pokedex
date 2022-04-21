import { StatusBar } from 'expo-status-bar';
import {Text, View, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import bulba from '../../assets/pokemons/bulbasauro.png';
import styles from '../StylePoke'
export default function Pokee() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image source = {bulba} style={styles.miniPoke}></Image>
      </Pressable>
      
      <Pressable style = {styles.cardDescricao}>
        <Text style = {styles.nome}>Bulbassauro</Text>
        <Text>Atributo: Planta</Text>
        <Text>Evoluções:  Ivyssauro, Venossauro</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}