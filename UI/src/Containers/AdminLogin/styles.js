import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    screen:{
        minHeight : Metrics.screenHeight,
        // alignItems : 'center',
        justifyContent:'center',
        marginHorizontal:Metrics.marginSmall
    },
    logo:{
        width:Metrics.screenWidth/1.5,
        height:Metrics.screenHeight/1.5
    },
    extrabuttons : {
        flexDirection :'row',
        justifyContent : 'space-around',
        padding :Metrics.paddingSmall
    },
    texts : {
        marginHorizontal : Metrics.marginMedium,
    },
    textInput : {
        marginVertical : Metrics.marginSmall
    },
    logoimage : {
        paddingVertical : Metrics.paddingSmall
    },
    button:{
        backgroundColor : Colors.backgroundColor
    }
})