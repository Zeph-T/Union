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
        marginHorizontal : Metrics.marginSmall
        // margin : Metrics.marginSmall
    },
    mapStyle:{
        height:Metrics.screenWidth,
        borderColor : 'black',
        borderWidth : 10,
        padding:Metrics.paddingSmall
    },
    reachus:{
        marginVertical : Metrics.marginMedium,
    },
    heading:{
        fontSize : Metrics.h1,
        marginTop : Metrics.marginMedium,
        paddingTop : Metrics.paddingMedium
    },
    email:{
        paddingTop :Metrics.paddingSmall,
        flexDirection : 'row',
    },
    emailtxt:{
        marginHorizontal : Metrics.marginSmall
    },
    iiitm:{
        color:'blue',
        fontSize : Metrics.h3
    }
})