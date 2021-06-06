import React, { useState } from 'react';
import { Segment, Button, Text } from 'native-base';
import {View} from 'react-native';
import ClubInfo from '../ClubAboutUs/ClubAboutUs';
import ClubTeam from '../ClubTeam/ClubTeam'
import ClubEvents from '../ClubEvents/ClubEvents';
import Stylecard from './styles';

const ClubSegment = (props) => {
    const [activePage, setActivePage] = useState(1);
    let renderContent = () => {
        switch (activePage) {
            case 1:
                return (
                    <ClubInfo />
                )
            case 2:
                return (
                    <ClubTeam />
                )
            case 3:
                return (
                    <ClubEvents />
                )
        }
    }

    return (
        <View>
            <Segment style={Stylecard.segmentHeader}>
                <Button style={Stylecard.button} first active={activePage === 1} onPress={() => setActivePage(1)}>
                    <Text>About Us</Text>
                </Button>
                <Button style={Stylecard.button} active={activePage === 2} onPress={() => setActivePage(2)}>
                    <Text>TEAM MEMBERS</Text>
                </Button>
                <Button style={Stylecard.button} last active={activePage === 3} onPress={() => setActivePage(3)}>
                    <Text>EVENTS</Text>
                </Button>
            </Segment>
            <View>
            {renderContent()}
            </View>
        </View>

    )
}

export default ClubSegment;