//An explanation of this project for the awesome Hackbright Academy
//we are practicing building custom components built with React Native's core components.
//This gives us a lot of practice with importing and exporting components from other files instad of putting everything in App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Game from './components/Game';
export default function App() {
  return (
    <View style={styles.container}>
      <Game />
      <StatusBar style="auto" />
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
});

//go to Game to see the basic layout!