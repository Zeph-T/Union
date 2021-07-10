import React from 'react';
import { ScrollView, View } from 'react-native';
import styleCard from './styles';
import {useSelector} from 'react-redux';
import { Title, Paragraph } from 'react-native-paper';
import Announcements from '../../Components/Anouncement/announcement';
import Notifications from '../../Components/Notification/Notification';

const HomeStudent = props => {
    const {name} = useSelector((state)=>state.user);
    return (
        <ScrollView style={styleCard.screenStyle}>
            <View>
                <Title style={styleCard.heading}>
                    Hey {name}👋
                </Title>
                <Paragraph style={styleCard.subheading}>
                    It has been a while!
                </Paragraph>
            </View>
            <Notifications title="News" />
            <Announcements title='Latest Events' />
        </ScrollView>
    )
}


export default HomeStudent;