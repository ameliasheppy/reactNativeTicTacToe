import { View, Text, StyleSheet, Pressable } from "react-native";

//this component will show the moves, pretty basic!
export default function Move() {
  return (
    <View style={styles.row}>
      <Text style={styles.counter}>0.</Text>
      <Pressable><Text style={styles.btn}>Go to game start</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    row:{
        alignItems:'center',
        flexDirection:"row",
    },
    counter:{
        width:20,
        fontSize:"1.2rem",
    },
    btn:{
        color:'blue',
        fontSize:'1.1rem'
    }
})