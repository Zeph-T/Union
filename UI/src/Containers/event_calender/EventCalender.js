import React from 'react';
import EventCalendar from '../../Components/Calendar/Calender';
import {ScrollView, View} from 'react-native';
import StyleCard from './styles';
import {Title} from 'react-native-paper';


const Events = () => {
    return (
        <ScrollView contentContainerStyle={StyleCard.screenStyle}>
        <Title style={StyleCard.heading}>Event Calendar</Title>
        <EventCalendar />
        </ScrollView>
    )
}

export default Events;