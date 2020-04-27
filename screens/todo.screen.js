import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DaySlider from './../components/day-slider';
import Todos from './../components/todos';
import Color from '../constraints/color';

export default function TodoScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  const onSelectDate = (date) => {
    const formatedDate = date.format('YYYY-MM-DD');
    setSelectedDate(formatedDate);
  }



  return (
    <View style={styles.container}>
      <DaySlider onSelectDate={onSelectDate} />
      <Todos date={selectedDate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: 0,
  }
});