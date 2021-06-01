import React from 'react';
import HomeStudent from '../Containers/home_student/homeStudent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import StudentProfile from '../Containers/student_profile/StudentProfile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Events from '../Containers/event_calender/EventCalender';
import Club from '../Containers/clubs/club';


const Tab = createBottomTabNavigator();

export default AppNavigation = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown : false
        }}>
        <Tab.Screen 
        name="Home"
        component={HomeStudent}
        options={{
            tabBarIcon:()=>{
                <MaterialIcons name="home" size={30}/>
            }
        }}
        />
        <Tab.Screen
        name="Event Calender"
        component={Events}
        options={{
            tabBarIcon : () =>(
                <MaterialIcons name="event" size={30} />
            )
        }}
        />
        <Tab.Screen
        name="Clubs"
        component={Club}
        options={{
            tabBarIcon : ()=>(
                <MaterialIcons name="groups" size={30} />
            )
        }}
        />
        <Tab.Screen
        name="Profile"
        component={StudentProfile}
        options={{
            tabBarIcon : ()=>(
                <MaterialIcons name="person" size={30} />
            )
        }}
        />
        </Tab.Navigator>

    )
}