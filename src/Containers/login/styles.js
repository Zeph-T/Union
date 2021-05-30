import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    screen:{
        minHeight : Metrics.screenHeight,
        alignItems : 'center',
        marginTop : Metrics.screenHeight/6,
        margin:Metrics.screenWidth/20
    },
    logo:{
        width:Metrics.screenWidth/1.5,
        height:Metrics.screenHeight/1.5
    }
})