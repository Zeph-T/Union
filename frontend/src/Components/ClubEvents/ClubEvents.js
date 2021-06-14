import React from 'react';
import { Title, Card } from 'react-native-paper';
import { ScrollView } from 'react-native';
import Announcements from '../Anouncement/announcement'
import Notifications from '../Notification/Notification'

const ClubEvents = (props) => {
    return (
        <ScrollView>
            <Announcements title='Events'/>
            <Notifications title="Notifications" showPostedBy='false' />
        </ScrollView>
    )
}

export default ClubEvents;