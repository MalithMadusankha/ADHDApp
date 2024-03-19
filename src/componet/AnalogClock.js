import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AnalogClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getRotationDegrees = (value, max) => (value / max) * 360;

  const getHandStyle = (value, max, length) => ({
    transform: [{rotate: `${getRotationDegrees(value, max)}deg`}],
    height: length,
  });

  const renderNumbers = () => {
    const numbers = Array.from({length: 12}, (_, index) => index + 1);
    const center = {x: 100, y: 100};

    return numbers.map(number => {
      const degree = getRotationDegrees(number, 12) - 60; // Adjusted to align numbers with clock border
      const position = {
        x: center.x + 70 * Math.cos((degree - 90) * (Math.PI / 180)),
        y: center.y + 70 * Math.sin((degree - 90) * (Math.PI / 180)),
      };

      return (
        <Text
          key={number}
          style={[styles.number, {left: position.x, top: position.y}]}>
          {number}
        </Text>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.clockFace}>
        {renderNumbers()}
        <View
          style={[styles.hand, getHandStyle(currentTime.getSeconds(), 60, 100)]}
        />
        <View
          style={[styles.hand, getHandStyle(currentTime.getMinutes(), 60, 80)]}
        />
        <View
          style={[
            styles.hand,
            getHandStyle(currentTime.getHours() % 12, 12, 60),
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockFace: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    position: 'relative',
  },
  hand: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 2,
    top: '50%',
    left: '50%',
    marginLeft: -1,
  },
  number: {
    position: 'absolute',
    color: 'black',
    fontWeight: 'bold',
  },
});

export default AnalogClock;
