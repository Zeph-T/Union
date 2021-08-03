import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, ScrollView } from 'react-native';
import { Paragraph, Dialog, Portal,ActivityIndicator,Colors } from 'react-native-paper';
import metrics from '../../Themes/Metrics';
import { EVENT_CALENDER_EVENTS_URL } from '../../Utils/constants';



const EventCalendar = () => {
  const [DialogVisible, setDialogVisible] = useState(false);
  const [events,setEvents] = useState([]);
  const [data , setData] = useState([]);
  const markedDates = {
    "2021-05-16": [{ marked: true, selectedColor: 'blue', Title: 'Pictionary 1', Description: 'General Description' }, { marked: true, selectedColor: 'blue', Title: 'Pictionary 2', Description: 'General Description' },{ marked: true, selectedColor: 'blue', Title: 'Pictionary 1', Description: 'General Description' }, { marked: true, selectedColor: 'blue', Title: 'Pictionary 2', Description: 'General Description' }],
    "2021-05-17": [{ marked: true, Title: 'Pictionary 2', Description: 'General Description', club: 'Uthaan' }],
    "2021-05-18": [{ marked: true, Title: 'Pictionary 3', Description: 'General Description', club: 'Uthaan' }]
  };
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    const ac = new AbortController();
    setLoading(true);
    fetch(EVENT_CALENDER_EVENTS_URL,{
        method:'GET',
        headers: {
         'Content-Type': 'application/json',
         'Accept' : 'application/json'
        }
    }).then((response) => response.json())
    .then(oEvents=>{
        ac.abort();
        console.log('Hi');
        // console.log(oEvents)
        setData(oEvents);
        // console.log(oEvents);
        setLoading(false);
        console.log("Getting data from backend");
        // console.log(data);
    }).catch(err=>{
        console.log(err);
        alert(err.stack.message);
    })
  },[]);

  let HandleDialogClose = () => {
    setDialogVisible(false);
  }

  let openDialog = async(day) => {
    // console.log(events);
    // console.log(day.dateString);
    console.log(data[day.dateString]);
    if(data[day.dateString]!== undefined){
      let tempEvents = data[day.dateString].map(oEvent=>{
        return{
          "name" : oEvent.name,
          "body" : oEvent.body,
          "date" : oEvent.date
        }
      });
      setEvents(tempEvents);
    }else{
      setEvents([{
        "name" : "OOPS, Sorry! No Events on this Day :(",
        "body" : ""
      }]);
    }
    setDialogVisible(true);
  }
    {
      if(loading){
        return(<ActivityIndicator style={{justifyContent: 'center', alignItems : 'center'}} animating={true} color={Colors.red800} />)
      }else{
        return(
<View>
      <Portal>
        <Dialog style={{ height : metrics.screenHeight / 1.5,justifyContent : 'center',alignContent : 'center' }} visible={DialogVisible} onDismiss={HandleDialogClose}>
          <ScrollView contentContainerStyle={{justifyContent : 'center'}}>
          <Dialog.ScrollArea style={{justifyContent : 'center'}}>

               {
                events.length > 0 ? events.map(oEvent => {
                  return (
                        <Dialog.Content key={oEvent._id}>
                          <Dialog.Title>
                            {oEvent.name}
                          </Dialog.Title>
                          <Dialog.Content style={{flexDirection : 'row' , justifyContent : 'space-between'}}>
                            <Paragraph>
                              {oEvent.body}
                            </Paragraph>
                            <Paragraph style={{fontWeight : '100'}}>
                              {oEvent.date}
                            </Paragraph>
                          </Dialog.Content>
                        </Dialog.Content>
                    )
                }) : null
              } 
          </Dialog.ScrollArea>
              </ScrollView>
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
        markedDates={data}
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
    }
}

export default EventCalendar;