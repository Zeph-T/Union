import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    screen:{
        minHeight : Metrics.screenHeight,
        alignItems : 'center',
        justifyContent:'center',
        marginHorizontal:Metrics.marginSmall
    },
    logo:{
        width:Metrics.screenWidth/1.5,
        height:Metrics.screenHeight/1.5
    }
})