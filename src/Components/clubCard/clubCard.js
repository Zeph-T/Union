import React from 'react';
import {Card,Title}from 'react-native-paper';
import {Image,View}from 'react-native';
import StyleCard from './styles'
import Images from '../../Themes/Images'
const ClubCard = (props) => {
    return(
        <View style={StyleCard.card}>
        <Card stlye={{height:'80%'}}>
            <Card.Cover 
            source={props.image} 
            resizeMode={`stretch`} 
            style={{flexDirection: 'column',height:200}}/>
            <Card.Content>
                <Title>
                    {props.name}
                </Title>
            </Card.Content>
        </Card>
        </View>
    )
}

export default ClubCard;