import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

const LineChartComponet = ({dataArr}) => {
  const data = {
    labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: dataArr,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View>
      <View>
        <LineChart
          data={data}
          width={Dimensions.get('window').width * 0.95} // Use full screen width
          height={220}
          chartConfig={chartConfig}
          bezier
          style={{marginVertical: 8, borderRadius: 16}}
        />
      </View>
    </View>
  );
};

export default LineChartComponet;

const styles = StyleSheet.create({});
