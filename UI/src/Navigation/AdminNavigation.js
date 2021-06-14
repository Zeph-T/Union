import React from 'react';
import HomeStudent from '../Containers/home_student/homeStudent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Events from '../Containers/event_calender/EventCalender';
import ActionBarNavigation from '../Navigation/ActionbarNavigation';
import AdminProfileNavigation from './AdminProfileNavigation';
import Colors from '../Themes/Colors';

const Tab = createBottomTabNavigator();

export default AppNavigation = () => {
    return(
        <Tab.Navigator 
        tabBarOptions ={{
            showLabel : false,
            activeTintColor : 'red',
            inactiveTintColor   : 'white',
            style:{
                backgroundColor : Colors.logoColor
            }
        }}
        screenOptions={{
            headerShown : false
        }}>
        <Tab.Screen 
        name="HomeScreen"
        component={ActionBarNavigation}
        options={{
            tabBarIcon:({color})=>(
                <MaterialIcons name="home" color={color} size={30}/>
            )
        }}
        />
        <Tab.Screen
        name="Event Calender"
        component={Events}
        options={{
            tabBarIcon : ({color}) =>(
                <MaterialIcons name="event" color={color}size={30} />
            )
        }}
        />
        <Tab.Screen
        name="Profile"
        component={AdminProfileNavigation}
        options={{
            tabBarIcon : ({color})=>(
                <MaterialIcons name="person" color={color} size={30} />
            )
        }}
        />
        </Tab.Navigator>

    )
}