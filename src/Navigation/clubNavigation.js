import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Club from '../Containers/clubs/club';
import ClubDetail from '../Containers/ClubDetails/clubDetail';

const Tab = createStackNavigator();

export default ClubNavigation = () => {
    return(
    <Tab.Navigator screenOptions={{
        headerShown : false
    }}>
        <Tab.Screen
        name="clubs"
        component={Club}
        />
        <Tab.Screen
        name="ClubDetail"
        component={ClubDetail}
        screenOptions={{
            headerShown : true
        }}
        />
    </Tab.Navigator>
    )
}