import React from 'react';
import { ScrollView} from 'react-native';
import styleCard from './styles';
import MapView,{Marker} from 'react-native-maps';

const ReachUs = props => {
    return (
        <ScrollView style={styleCard.screenStyle}>
            <MapView
            style={styleCard.mapStyle}
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


export default ReachUs;