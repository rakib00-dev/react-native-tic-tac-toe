import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
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
    } else if (
      gameState[3] != 'empty' &&
      gameState[3] == gameState[4] &&
      gameState[4] == gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] != 'empty' &&
      gameState[6] == gameState[7] &&
      gameState[7] == gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    }

    // top to bottom
    else if (
      gameState[0] != 'empty' &&
      gameState[0] == gameState[3] &&
      gameState[3] == gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] != 'empty' &&
      gameState[1] == gameState[4] &&
      gameState[4] == gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] != 'empty' &&
      gameState[2] == gameState[5] &&
      gameState[5] == gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    }

    // cross access 0-8
    else if (
      gameState[0] != 'empty' &&
      gameState[0] == gameState[4] &&
      gameState[4] == gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }

    // cross access 2-6
    else if (
      gameState[2] != 'empty' &&
      gameState[2] == gameState[4] &&
      gameState[4] == gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner(`Game is Draw...!⌛`);
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: '#ffffff',
      });
    }

    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        textColor: 'white',
      });
    }

    checkIsWinner();
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Tic Tac Toe With Rakib</Text>
      </View>

      <FlatList numColumns={3} data={gameState} renderItem={item => <></>} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
