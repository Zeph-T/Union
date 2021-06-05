import React, { useState } from 'react';
import { Segment, Button, Text } from 'native-base';
import {View} from 'react-native';
import ClubInfo from '../ClubAboutUs/ClubAboutUs';
import ClubTeam from '../ClubTeam/ClubTeam'

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
                    <Text>
                        Thirdddd
                    </Text>
                )
        }
    }

    return (
        <View>
            <Segment>
                <Button first active={activePage === 1} onPress={() => setActivePage(1)}>
                    <Text>About Us</Text>
                </Button>
                <Button active={activePage === 2} onPress={() => setActivePage(2)}>
                    <Text>Past Events</Text>
                </Button>
                <Button last active={activePage === 3} onPress={() => setActivePage(3)}>
                    <Text>Future Events</Text>
                </Button>
            </Segment>
            <View>
            {renderContent()}
            </View>
        </View>

    )
}

export default ClubSegment;