import React from 'react';
import {Card,Title} from 'react-native-paper';
import { ScrollView,View } from 'react-native'
import data from '../../data/dummy-data';
import styleCard from './style';


const Announcements = props => {
    return (
        <View>
            <Title style={styleCard.announcementHeading}>Announcements! 🚀</Title>
            <View style={styleCard.announcementScrollView}>
                <ScrollView>
                    {
                        data.map((item, index) =>
                        (
                                <Card key={index} style={styleCard.announcementCard}>
                                    <Card.Content>
                                        <Title>
                                            {item.name}
                                        </Title>
                                    </Card.Content>
                                </Card>
                            )
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Announcements;