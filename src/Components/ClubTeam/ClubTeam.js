import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View,ScrollView } from 'react-native'
import Images from '../../Themes/Images';
import Metrics from '../../Themes/Metrics'
import Swiper from 'react-native-swiper-hooks'
import TeamMemberCard from '../TeamMember/TeamMemberCard'

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


const ClubTeam = () => (
    <ScrollView contentContainerStyle={{justifyContent : 'space-between'}} style={{marginHorizontal:Metrics.marginSmall,flexDirection : 'column'}}>
        <Title style={{color:'green',fontSize : 30,marginVertical : Metrics.marginSmall}}>Mentor</Title>
        <TeamMemberCard image={Images.uthaanMentor} name="Rajendra Sahu" />
        <Title style={{color:'green',fontSize : 30,marginVertical : Metrics.marginSmall}}>Team Members</Title>
        <View style={{borderColor: 'black', borderWidth: 5 }}>
            <Swiper
                height={Metrics.screenHeight * 0.35}
                width={Metrics.screenWidth * 0.98}
                paginationSelectedColor={'#CCFF66'}
                autoplay={true}
                loop={false}
                showPagination={false}
                direction={'row'}
            >
                {_renderList()}
            </Swiper>
        </View>
    </ScrollView>
);

export default ClubTeam;