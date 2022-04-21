import { StyleSheet } from "react-native";
import { textDecorationColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      miniPoke: {
        width: 200,
        height:200,
      },
      nome:{
          marginTop:5,
          fontWeight:'bold',
          textAlign:'center',
      },
      cardDescricao:{
          padding: 10,
          marginTop:10,
          backgroundColor:'#DCDCDC',
          borderRadius:10,
      }
  });

  export default styles;