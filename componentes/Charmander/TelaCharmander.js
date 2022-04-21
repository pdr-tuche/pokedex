import { StatusBar } from 'expo-status-bar';
import {Text, View, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import charmander from '../../assets/pokemons/charmander.png';
import styles from '../StylePoke'
export default function Pokee() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image source = {charmander} style={styles.miniPoke}></Image>
      </Pressable>
      
      <Pressable style = {styles.cardDescricao}>
        <Text style = {styles.nome}>Charmander</Text>
        <Text>Atributo: Fogo</Text>
        <Text>Evoluções:  Charmeleon, Charizard</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}