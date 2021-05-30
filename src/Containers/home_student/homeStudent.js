import React from 'react';
import {ScrollView,View} from 'react-native';
import styleCard from './styles';
import {Title,Paragraph} from 'react-native-paper';
import Announcements from '../../Components/Anouncement/announcement';
import Notifications from '../../Components/Notification/Notification';

const HomeStudent = props => {
    return(
        <ScrollView style={styleCard.screenStyle}>
            <View>
            <Title style={styleCard.heading}>
                    Hey There!👋
                </Title>
                <Paragraph style={styleCard.subheading}>
                    It has been a while!
                </Paragraph>
            </View>
            <Announcements />
            <Notifications />
        </ScrollView>
    )
}


export default HomeStudent;