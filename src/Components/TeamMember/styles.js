import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    card:{
        width:Metrics.screenWidth*0.98,
    },
    Content:{
        flexDirection:'row',
        justifyContent : 'space-around'
    },
    title:{
        margin:5
    }
})