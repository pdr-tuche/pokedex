import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import squirtle from '../../assets/pokemons/squirtle.png'
import styles from '../StylePoke'

export default function Pokee() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image source = {squirtle} style={styles.miniPoke}></Image>
      </Pressable>
      
      <Pressable style = {styles.cardDescricao}>
        <Text style = {styles.nome}>Squirtle</Text>
        <Text>Atributo: Agua</Text>
        <Text>Evoluções: Wartortle, Blastoise</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}


