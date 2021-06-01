import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, ScrollView } from 'react-native';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import metrics from '../../Themes/Metrics';



const EventCalendar = () => {
  const [DialogVisible, setDialogVisible] = useState(false);
  const markedDates = {
    "2021-05-16": { selected: true, marked: true, selectedColor: 'blue', Title: 'Pictionary 1', Description: 'General Description', club: 'Uthaan' },
    "2021-05-17": { marked: true, Title: 'Pictionary 2', Description: 'General Description', club: 'Uthaan', selectedColor: 'green' },
    "2021-05-18": { marked: true, Title: 'Pictionary 3', Description: 'General Description', club: 'Uthaan', selectedColor: 'red' },
  };
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  let HandleDialogClose = () => {
    setDialogVisible(false);
  }

  let openDialog = (day) => {
    let date = markedDates[day.dateString] ? markedDates[day.dateString] : {};
    setSelectedTitle(date.Title ? date.Title : "No Events");
    setSelectedDescription(date.Description ? date.Description : "No Events on this Day");
    setSelectedColor(date.selectedColor ? date.selectedColor : "green");
    setDialogVisible(true);
  }
  return (
    <View>
      <Portal>
        <Dialog visible={DialogVisible} onDismiss={HandleDialogClose}>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ height: metrics.screenHeight / 1.5, alignItems: 'center', justifyContent: 'center' }}>
              <Dialog.Title>
                {selectedTitle}
              </Dialog.Title>
              <Dialog.Content>
                <Paragraph>
                  {selectedDescription}
                </Paragraph>
              </Dialog.Content>
              <Dialog.Title>
                {selectedTitle}
              </Dialog.Title>
              <Dialog.Content>
                <Paragraph>
                  {selectedDescription}
                </Paragraph>
              </Dialog.Content>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
      <Calendar
        // Specify style for calendar container element. Default = {}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 400,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowRadius: 8,
          elevation: 5,
          borderRadius: 0,
          backgroundColor: 'white',
          shadowColor: 'black',
          marginTop: 100,
          marginHorizontal: 5,
          borderRadius: 10
        }}
        onDayPress={(day) => openDialog(day)}
        markedDates={{
          '2021-05-16': { selected: true, marked: true, selectedColor: 'red', backgroundColor: 'red' },
          '2021-05-17': { marked: true, selectedColor: 'green' },
          '2021-05-18': { marked: true, selectedColor: 'green', activeOpacity: 0 },
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
        hideExtraDays={true}
      />
    </View>
  )
}

export default EventCalendar;