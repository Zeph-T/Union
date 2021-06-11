import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import styleCard from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'native-base';

const AddEvent = () => {
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [time,setTime] = useState("");

    const onChange = (event, input) => {
        setShow(Platform.OS === 'ios');
        if(mode === 'date'){
            const currentDate = input || date;
            setDate(currentDate);
        }else{
            setTime(input);
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styleCard.screen}>
            <TextInput
                style={styleCard.button}
                label="Event Name"
                value={eventName}
                onChangeText={text => setEventName(text)}
            />
            <View style={styleCard.buttonContainer}>
                <TextInput label="Event Date" value={new Date(date).toLocaleDateString()} disabled style={styleCard.dateandTime}/>
                <Button onPress={showDatepicker} title="Set the Date" style={styleCard.button} />
            </View>
            <View style={styleCard.buttonContainer}>
            <TextInput label="Event Time" value={new Date(time).toLocaleTimeString() ? new Date(time).toLocaleTimeString() : ""} disabled style={styleCard.dateandTime}/>
            <Button onPress={showTimepicker}  title="Set the Time" style={styleCard.button} />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <TextInput style={styleCard.eventContent} label="Event Content" multiline={true} numberOfLines={5}/>
        </View>
    );
};

export default AddEvent;