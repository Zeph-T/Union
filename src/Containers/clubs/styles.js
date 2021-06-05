import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    heading:{
        fontFamily : 'serif',
        fontSize : Metrics.h1,
        fontWeight: "bold",
        paddingTop : Metrics.paddingSmall,
        marginLeft : Metrics.marginSmall,
        color : 'red',
    },
    screenStyle:{
        paddingVertical : Metrics.screenHeight/40,
    }
})