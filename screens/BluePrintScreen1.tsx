import React, { useState } from 'react';
import { View, Text, Dimensions, PanResponder } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export default function BluePrintScreen() {
  const screenWidth = Dimensions.get('window').width;

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
  const barData = [100, 180, 250, 220, 340, 300, 400, 280, 350, 500, 420, 480];
  const lineData = [80, 150, 200, 210, 300, 280, 370, 250, 320, 460, 400, 450];
  const combinedData = barData.map((barValue, index) => ({
    value: barValue,
    label: labels[index],
    dataPointText: lineData[index].toString(),
  }));
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
        alignItems: 'center',
      }}
    >
      <LineChart
        data={combinedData}
        height={250}
        width={screenWidth - 20}
        spacing={25}
        showBar={true} 
        barWidth={14}
        barBorderRadius={6}
        barGradientColor={'#00FFAA'}
        color="#FF7F50" 
        dataPointsColor="#FF7F50"
        thickness={3}
        curved
        hideRules={false}
        initialSpacing={20}
        xAxisLabelTextStyle={{ color: '#fff', fontSize: 10 }}
        yAxisTextStyle={{ color: 'white' }}
        backgroundColor="#000"
        yAxisThickness={0}
        xAxisThickness={0}
        focusEnabled
        showDataPointOnFocus
        hideDataPoints={false}
        pointerConfig={{
          pointerStripHeight: 250,
          pointerStripColor: '#fff',
          pointerColor: '#fff',
          radius: 4,
          pointerLabelWidth: 120, 
          pointerLabelHeight: 50, 
          activatePointersOnLongPress: false, // ✅ change this to false
          autoAdjustPointerLabelPosition: true,
          pointerLabelComponent: items => (
            <View
              style={{
                backgroundColor: '#222',
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#00FFAA',
              }}
            >
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>
                Bar: ₹{items[0]?.value}
                {'\n'}
                Line: ₹{items[0]?.dataPointText}
              </Text>
            </View>
          ),
        }}
      />
    </View>
  );
}
