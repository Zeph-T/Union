import React from 'react';
import { ScrollView ,View} from 'react-native';
import styleCard from './styles';
import { Card ,Title,Paragraph} from 'react-native-paper'
import MapView, { Marker } from 'react-native-maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ReachUs = props => {
    return (
        <ScrollView style={styleCard.screenStyle}>
            <Title style={styleCard.heading}>
                Reach Us!
            </Title>
            <Card style={styleCard.reachus}>
                <Card.Content>
                    <Paragraph style={styleCard.iiitm}>ABV-Indian Institute of Information Technology and Management Gwalior, Morena Link Road, Gwalior, Madhya Pradesh, India,474015</Paragraph>
                    <View style={styleCard.email}>
                    <MaterialIcons name="email" size={30}/>
                    <Paragraph style={styleCard.emailtxt}>info@iiitm.ac.in</Paragraph>
                    </View>
                </Card.Content>
            </Card>
            <MapView
                style={styleCard.mapStyle}
                initialRegion={{
                    latitude: 26.2495,
                    longitude: 78.1741,
                    latitudeDelta: .005,
                    longitudeDelta: .005
                }} >
                <Marker
                    coordinate={{ latitude: 26.2495, longitude: 78.1741 }}
                    title='ABV-IIITM Gwalior'
                    description='This is where the magic happens!'
                >
                </Marker >
            </MapView>
        </ScrollView>
    )
}


export default ReachUs;