import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    segmentHeader:{
        padding:Metrics.paddingMedium
    },
    button:{
        paddingVertical:Metrics.paddingSmall,
        paddingHorizontal : Metrics.paddingExtraSmall,
        height:Metrics.screenWidth/12
    }
})