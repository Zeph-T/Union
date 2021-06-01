import React from 'react';
import {ScrollView} from 'react-native';
import ClubCard from '../../Components/clubCard/clubCard';
import Images from '../../Themes/Images'
import {Title} from 'react-native-paper';
import Metrics from '../../Themes/Metrics';
import styleCard from './styles';
const Club = (props) => {
    return(
        <ScrollView contentContainerStyle={styleCard.screenStyle}>
            <Title style={styleCard.heading}>
                    Clubs ♣️
            </Title>
            <ClubCard image={Images.uthaanlogo} name="Uthaan"/>
            <ClubCard image={Images.aasflogo} name="Aasf" />
            <ClubCard image={Images.dsclogo}  name="Developer Student Clubs"/>
            <ClubCard image={Images.ieeelogo} name="IEEE Student Branch"/>
            <ClubCard image={Images.ecelllogo} name="E-Cell"/>
        </ScrollView>
    )
}

export default Club;