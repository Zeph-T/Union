import React from 'react';
import {ScrollView,View} from 'react-native';
import styleCard from './styles';
import {Title,Paragraph} from 'react-native-paper';
import Announcements from '../../Components/Anouncement/announcement';

const StudentProfile = props => {
    return(
        <ScrollView style={styleCard.screenStyle}>
            <View>
            <Title style={styleCard.heading}>
                    Profile Page!👋
                </Title>
                <Paragraph style={styleCard.subheading}>
                    It has been a while!
                </Paragraph>
            </View>
            <Announcements />
        </ScrollView>
    )
}


export default StudentProfile;