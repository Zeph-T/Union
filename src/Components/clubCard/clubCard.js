import React from 'react';
import {Card,Title}from 'react-native-paper';
import {Image,View,TouchableOpacity}from 'react-native';
import StyleCard from './styles'
import Images from '../../Themes/Images'
const ClubCard = ({navigation,image,name}) => {
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('ClubDetail')}>
        <View style={StyleCard.card}>
        <Card stlye={{height:'80%'}}>
            <Card.Cover 
            source={image} 
            resizeMode={`stretch`} 
            style={{flexDirection: 'column',height:200}}/>
            <Card.Content>
                <Title>
                    {name}
                </Title>
            </Card.Content>
        </Card>
        </View> 
        </TouchableOpacity>

    )
}

export default ClubCard;