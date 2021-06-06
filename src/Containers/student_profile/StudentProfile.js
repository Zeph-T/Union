import React from 'react';
import { ScrollView, View } from 'react-native';
import styleCard from './styles';
import { Title, Paragraph } from 'react-native-paper';
import Announcements from '../../Components/Anouncement/announcement';
import MapView,{Marker} from 'react-native-maps';
import metrics from '../../Themes/Metrics';

const StudentProfile = props => {
    return (
        <ScrollView style={styleCard.screenStyle}>
            <MapView
            style={{width:metrics.screenWidth-10,height:metrics.screenWidth-10}}
                initialRegion={{
                    latitude: 33.7872131,
                    longitude: -84.381931,
                    latitudeDelta: .005,
                    longitudeDelta: .005
                }} >

                <Marker
                    coordinate={{ latitude: 33.7872131, longitude: -84.381931 }}
                    title='Flatiron School Atlanta'
                    description='This is where the magic happens!'
                >
                </Marker >
            </MapView>
        </ScrollView>
    )
}


export default StudentProfile;