import {StyleSheet}  from 'react-native'
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics';


export default StyleSheet.create({
    heading:{
        fontFamily : 'serif',
        fontSize : Metrics.h1,
        fontWeight: "bold",
        paddingTop : Metrics.paddingSmall,
        marginLeft : Metrics.marginSmall,
        color : 'red'
    },
    subheading : {
        fontWeight:"bold",
        color:'grey',
        fontSize : Metrics.h3,
        // fontFamily : 'Raleway-Italic',
        marginLeft : Metrics.marginSmall
    },
    screenStyle:{
        paddingVertical : Metrics.screenHeight/40,
        backgroundColor : '#1E2749'
    }
})