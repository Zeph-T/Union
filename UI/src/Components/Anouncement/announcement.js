import React, { useState } from 'react';
import { Card, Title, Paragraph, Subheading, Modal, Portal, Dialog } from 'react-native-paper';
import { ScrollView, View, TouchableOpacity,Image } from 'react-native'
import data from '../../data/dummy-data';
import styleCard from './style';
import metrics from '../../Themes/Metrics';
import { SocialIcon } from 'react-native-elements'
import Images from '../../Themes/Images';
const Announcements = props => {
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <View style={styleCard.announcementContainer}>
            <Portal>
                <Dialog visible={visible} onDismiss={hideModal}>
                    <Dialog.ScrollArea style={{ backgroundColor: 'purple' }}>
                        <ScrollView contentContainerStyle={{ height: metrics.screenHeight / 1.5, alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
                            <Dialog.Title>
                                Example
                            </Dialog.Title>
                            <Dialog.Content>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Subheading style={{ fontWeight: 'bold' }}>Posted On : 30-2-2021</Subheading>
                                </View>
                                <Paragraph>
                                    This is just a basic Info about the Event just for getting some Dummy Data.This is just a basic Info about the Event just for getting some Dummy Data.This is just a basic Info about the Event just for getting some Dummy Data
                                </Paragraph>
                                <View style={{ marginVertical: metrics.marginMedium }}>
                                    <SocialIcon
                                        type='instagram'
                                        button
                                        title="Open in Instagram"
                                    />
                                    <SocialIcon
                                        type='facebook'
                                        button
                                        title="Open in Facebook"
                                    />
                                </View>
                            </Dialog.Content>
                        </ScrollView>
                    </Dialog.ScrollArea>
                </Dialog>
            </Portal>
            <Title style={styleCard.announcementHeading}>{props.title} 🚀</Title>
            <View style={styleCard.announcementScrollView}>
                <ScrollView>
                    {
                        data.map((item, index) =>
                        (
                            <TouchableOpacity onPress={() => { showModal() }}>
                                <Card key={index} style={{ ...styleCard.announcementCard, backgroundColor: item.color }}>
                                    <Card.Content>
                                        <View style={styleCard.HeadingStyle}>
                                            <Title>
                                                {item.name}
                                            </Title>
                                            <Title>
                                                📅{item.date}
                                            </Title>
                                        </View>
                                        <Paragraph>
                                            {item.info}
                                        </Paragraph>
                                        <View style={styleCard.club}>
                                            <Subheading style={styleCard.SubheadingStyle}>{item.Organiser}</Subheading>
                                        </View>
                                    </Card.Content>
                                </Card>
                            </TouchableOpacity>
                        )
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Announcements;