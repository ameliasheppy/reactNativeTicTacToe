import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Board from "./Board";
import Move from "./Move";

//In here, we started by building two basic parts, the board and the moves areas
//we use a scrollview for our list of moves so that we can scroll if the list exceds the container size
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)

    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    console.log(currentSquares, "current squares")

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        console.log(currentMove, "I am current move")
        console.log(nextHistory, "i am next history")
        console.log(history, "i am history")
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
      }


    return (
      <>
        <View style={styles.boardContainer}>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
        </View>
        <ScrollView style={styles.movesContainer}>
          <Move  style={styles.movesContainerContent}/>
        </ScrollView>
      </>
    );
  }

  const styles = StyleSheet.create({
    boardContainer: {
        display:'flex',
        display:'50%',
        alignItems:"center",
        justifyContent:"center",
        borderColor:'grey',
        borderWidth:1,
        padding:20,
    },
    movesContainer: {
        display:'flex',
        display:'50%',
        padding:10,
    },
    movesContainerContent: {
       alignItems:"center",
       justifyContent:"top",
    },
  });