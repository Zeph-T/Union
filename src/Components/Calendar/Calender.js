import React from 'react';
import { Calendar } from 'react-native-calendars';

const EventCalendar = () => {
    return (
<Calendar
  // Specify style for calendar container element. Default = {}
  style={{
    borderWidth: 1,
    borderColor: 'gray',
    height: 400,
    shadowColor : 'black',
    shadowOffset :{
        width : 0,
        height : 2
    },
    shadowRadius : 8,
    elevation : 5,
    borderRadius :0,
    backgroundColor : 'white',
    shadowColor : 'black',
    marginTop : 100,
    marginHorizontal : 5,
    borderRadius : 10
  }}
  onDayPress={(day)=>console.log(day)}
  markedDates={{
    '2021-05-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2021-05-17': {marked: true},
    '2021-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
  }}
  // Specify theme properties to override specific styles for calendar parts. Default = {}
  theme={{
    backgroundColor: '#faf9f9',
    calendarBackground: '#faf9f9',
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: '#1E2749',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: '#1E2749',
    indicatorColor: '#1E2749',
    textDayFontFamily: 'sans-serif',
    textMonthFontFamily: 'sans-serif',
    textDayHeaderFontFamily: 'sans-serif',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '400',
    textDayFontSize: 16,
    textMonthFontSize: 20,
    textDayHeaderFontSize: 16
  }}
  hideExtraDays = {true}
    />
    )
}

export default EventCalendar;