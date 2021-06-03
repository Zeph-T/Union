import React from 'react';
import {Text,View} from 'react-native';
import {Title} from 'react-native-paper'
import ClubSegment from '../../Components/ClubSegment/ClubSegment';

const ClubDetails = (props)=> {
    return(
        <View>
            <Title>
                Club Details
            </Title>
            <ClubSegment />
        </View>
    )
}

export default ClubDetails;