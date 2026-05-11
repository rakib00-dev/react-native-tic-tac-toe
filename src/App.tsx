import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { JSX, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Snackbar } from 'react-native-snackbar';
import { Icon } from 'react-native-vector-icons/Icon';

export default function App(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const checkIsWinner = () => {
    // left to right
    if (
      gameState[0] != 'empty' &&
      gameState[0] == gameState[1] &&
      gameState[1] == gameState[2]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }
    if (
      gameState[3] != 'empty' &&
      gameState[3] == gameState[4] &&
      gameState[4] == gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    }
    if (
      gameState[6] != 'empty' &&
      gameState[6] == gameState[7] &&
      gameState[7] == gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    }

    // top to bottom
    if (
      gameState[0] != 'empty' &&
      gameState[0] == gameState[3] &&
      gameState[3] == gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }
    if (
      gameState[1] != 'empty' &&
      gameState[1] == gameState[4] &&
      gameState[4] == gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    }
    if (
      gameState[2] != 'empty' &&
      gameState[2] == gameState[5] &&
      gameState[5] == gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    }

    // cross access 0-8
    if (
      gameState[0] != 'empty' &&
      gameState[0] == gameState[4] &&
      gameState[4] == gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }

    // cross access 2-6
    if (
      gameState[2] != 'empty' &&
      gameState[2] == gameState[4] &&
      gameState[4] == gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Tic Tac Toe With Rakib</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
