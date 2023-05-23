import { Text, View, StyleSheet, Pressable } from "react-native";
//in my board components, I am rendering a view of the status of the game and three rows of my square components
//I don't need square outside of board, so I am defining it in this Board component
//3 views of 3 squares in a row will make up of Board component UI
function Square({value, onSquarePress}) {
    return (
        <Pressable onPress={onSquarePress}>
      <View style={styles.rows} >
        <Text style={styles.rowText}>{value}</Text>
      </View>
      </Pressable>
    );
  }

  export default function Board({xIsNext, squares, onPlay}) {
    const status = `Next player: ${xIsNext ? "X" : "O"}`
    const end = `Done! Congrats: `
    function handlePress(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
      }

    function whoWon(squares){
        
    }

    return (
      <>
        <Text style={styles.statusStyles}>{status}</Text>
        <Text style={styles.statusStyles}>{end}</Text>
        <View style={styles.scootOver}>
          <Square value={squares[0]}  onSquarePress={() => handlePress(0)}/>
          <Square value={squares[1]}  onSquarePress={() => handlePress(1)}/>
          <Square value={squares[2]}  onSquarePress={() => handlePress(2)}/>
        </View>
        <View style={styles.scootOver}>
          <Square value={squares[3]}  onSquarePress={() => handlePress(3)}/>
          <Square value={squares[4]}  onSquarePress={() => handlePress(4)}/>
          <Square value={squares[5]}  onSquarePress={() => handlePress(5)}/>
        </View>
        <View style={styles.scootOver}>
          <Square value={squares[6]}  onSquarePress={() => handlePress(6)}/>
          <Square value={squares[7]}  onSquarePress={() => handlePress(7)}/>
          <Square value={squares[8]}  onSquarePress={() => handlePress(8)}/>
        </View>
      </>
    );
  }

const styles = StyleSheet.create({
    statusStyles:{
       
    },
    rows:{
        borderColor:'black',
        borderWidth:1,
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
    },
    rowText:{
        fontSize:'4rem',
        fontWeight:'600'
    },
    scootOver:{
        flexDirection:'row'
    }
})