import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StopwatchGame = ({elapsedTime, formatTime}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.timer]}>{formatTime(elapsedTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 30,
    color: '#02020ede',
  },
});

export default StopwatchGame;
