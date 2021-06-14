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
            <ClubCard image={Images.uthaanlogo} {...props}  name="Uthaan"/>
            <ClubCard image={Images.aasflogo} {...props} name="Aasf" />
            <ClubCard image={Images.dsclogo} {...props}  name="Developer Student Clubs"/>
            <ClubCard image={Images.ieeelogo} {...props} name="IEEE Student Branch"/>
            <ClubCard image={Images.ecelllogo} {...props} name="E-Cell"/>
        </ScrollView>
    )
}

export default Club;