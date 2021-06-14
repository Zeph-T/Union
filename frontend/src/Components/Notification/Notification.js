import React from 'react';
import {Card,Title,Paragraph,Subheading} from 'react-native-paper';
import { ScrollView,View } from 'react-native'
import data from '../../data/dummy-data';
import styleCard from './style';


const Notifications = props => {
    return (
        <View>
            <Title style={styleCard.announcementHeading}>{props.title}📰 </Title>
            <View style={styleCard.announcementScrollView}>
                <ScrollView>
                {
                        data.map((item, index) =>
                        (
                            <Card key={index} style={{ ...styleCard.announcementCard }}>
                                <Card.Content>
                                    <View style={styleCard.HeadingStyle}>
                                        <Title>
                                            📅{item.date}
                                        </Title>
                                    </View>
                                    <Paragraph>
                                        {item.info}
                                    </Paragraph>
                                    <View style={styleCard.postedby}>
                                        <Subheading style={styleCard.SubheadingStyle}>Posted By : {item.Organiser}</Subheading>
                                    </View>
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

export default Notifications;