import React from 'react';
import { ScrollView, View } from 'react-native';
import styleCard from './styles';
import { Title, Paragraph } from 'react-native-paper';
import Announcements from '../../Components/Anouncement/announcement';
import Notifications from '../../Components/Notification/Notification';
import ActionButton from '../../Components/ActionButton/ActionButton';

const HomeAdmin = props => {
    
    return (
        <ScrollView contentContainerStyle={styleCard.screenStyle}>
            <View>
                <Title style={styleCard.heading}>
                   Uthaan
                </Title>
            </View>
             <Notifications title="Latest Notifications"/> 
            <Announcements  title="Latest Events" />
            <ActionButton {...props}/>
        </ScrollView>
    )
}


export default HomeAdmin;