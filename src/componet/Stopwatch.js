import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Stopwatch = ({elapsedTime, formatTime}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.timer]}>{formatTime(elapsedTime)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 70,
    marginBottom: 20,
    color: '#02020ede',
  },
});

export default Stopwatch;
