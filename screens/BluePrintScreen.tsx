import React, { useState } from 'react';
import { View, Text, Dimensions, PanResponder } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function BluePrintScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const data = [100, 180, 250, 220, 340, 300, 400, 280, 350, 500, 420, 480];

  const chartWidth = screenWidth - 20;

  // Handle touch move across the chart
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      const x = gestureState.x0;
      handleTouch(x);
    },
    onPanResponderMove: (evt, gestureState) => {
      const x = gestureState.moveX;
      handleTouch(x);
    },
  });

  // Calculate nearest point
  const handleTouch = x => {
    const chartPadding = 40; // left padding area in chart
    const graphWidth = chartWidth - chartPadding * 2;
    const spacing = graphWidth / (data.length - 1);

    let index = Math.round((x - chartPadding) / spacing);
    index = Math.max(0, Math.min(data.length - 1, index));

    setSelectedIndex(index);
    setSelectedValue(data[index]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 30 }}>
      <Text
        style={{
          textAlign: 'center',
          color: '#00FFAA',
          fontSize: 18,
          fontWeight: '600',
          marginBottom: 10,
        }}
      >
        {selectedValue !== null
          ? `Selected: ₹${selectedValue} (${labels[selectedIndex]})`
          : 'Tap anywhere on the chart 👇'}
      </Text>

      <View {...panResponder.panHandlers}>
        <LineChart
          data={{
            labels,
            datasets: [{ data }],
          }}
          width={chartWidth}
          height={250}
          yAxisLabel="₹"
          fromZero
          chartConfig={{
            backgroundColor: '#1E2923',
            backgroundGradientFrom: '#08130D',
            backgroundGradientTo: '#1E2923',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 255, 170, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: '5',
              strokeWidth: '2',
              stroke: '#00FFAA',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          renderDotContent={({ x, y, index }) => {
            if (selectedIndex === index) {
              return (
                <View
                  key={index}
                  style={{
                    position: 'absolute',
                    top: y - 40,
                    left: x - 20,
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: 6,
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      shadowColor: '#000',
                      shadowOpacity: 0.2,
                      shadowRadius: 3,
                      elevation: 3,
                    }}
                  >
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 12,
                        fontWeight: '600',
                      }}
                    >
                      ₹{data[index]}
                    </Text>
                  </View>
                </View>
              );
            }
            return null;
          }}
        />
      </View>
    </View>
  );
}
