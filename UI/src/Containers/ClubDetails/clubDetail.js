import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {Title} from 'react-native-paper'
import ClubSegment from '../../Components/ClubSegment/ClubSegment';

const ClubDetails = (props) => {
    return (
        <ScrollView style={{marginTop : 40}}>
            <ClubSegment />
        </ScrollView>
    )
}

export default ClubDetails;