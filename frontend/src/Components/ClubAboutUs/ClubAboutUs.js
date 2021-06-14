

import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper-hooks'
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import TeamMemberCard from '../TeamMember/TeamMemberCard';
import Images from '../../Themes/Images'
import Metrics from '../../Themes/Metrics'
import StyleCard from './styles';
import { SocialIcon } from 'react-native-elements'

const _renderList = () => {
    let listData = [
        {
            name: 'Zephaniah',
            role: 'EMT',
            image: Images.aasflogo
        },
        {
            name: 'Soumya',
            role: 'Reporting Head',
            image: Images.dsclogo
        },
        {
            name: 'Ishita',
            role: 'EMT',
            image: Images.ieeelogo
        }
    ]
    return (
        listData.map((item, idx) => {
            return (
                <TeamMemberCard key={idx} image={item.image} role={item.role} name={item.name} />
            )
        })
    )
}


const ClubInfo = () => (
    <ScrollView>
        <Card style={StyleCard.cardStyle}>
            <Card.Cover style={StyleCard.cardImage} source={Images.uthaangrp} />
            <Card.Content>
                <Title>Uthaan</Title>
                <Paragraph style={StyleCard.paragraph}>Uthaan is journalism and recreational forum of the institute, by the students for the students. This forum has been formed in order to enable all round development of the students in all facets of life. Our aim is to develop and nurture every sort of quality in the students. It is a forum which serves as a bridge between academics and student welfare. We are the eyes and ears of the institute, when it comes to any event occurring inside it, We cover the events through all forms of media.</Paragraph>
            </Card.Content>
        </Card>
        <View style={StyleCard.socialMediaContainer}>
        <SocialIcon
            type='instagram'
            button
            style={StyleCard.socialMediaContent}
        />
        <SocialIcon
            type='facebook'
            button
            style={StyleCard.socialMediaContent}
        />
        <SocialIcon
            type='medium'
            title="Uthaan IIITM"
            style={StyleCard.socialMediaContent}
        />
        <SocialIcon
            type='youtube'
            title="Uthaan IIITM"
            style={StyleCard.socialMediaContent}
        />
        <SocialIcon
            type='twitter'
            title="Uthaan IIITM"
            style={StyleCard.socialMediaContent}
        />
        </View>

    </ScrollView>
);



export default ClubInfo;

