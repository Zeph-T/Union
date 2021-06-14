import {StyleSheet}  from 'react-native'

import Metrics from '../../Themes/Metrics'
export default StyleSheet.create({
    heading:{
        fontFamily : 'serif',
        fontSize : Metrics.h1,
        fontWeight: "bold",
        paddingTop : Metrics.paddingSmall,
        marginLeft : Metrics.marginSmall,
        color : 'black',
        marginTop : Metrics.marginLarge+Metrics.marginMedium
    },
    subheading : {
        fontWeight:"bold",
        color:'grey',
        fontSize : Metrics.h3,
        // fontFamily : 'Raleway-Italic',
        marginLeft : Metrics.marginSmall
    },
    screenStyle:{
        height : Metrics.screenHeight
    }
})