import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    screen:{
        minHeight : Metrics.screenHeight,
        justifyContent:'center',
        marginHorizontal:Metrics.marginSmall
    },
    button:{
        width : Metrics.screenWidth*0.25,
        backgroundColor : 'white',
    },
    buttonContainer:{
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginTop : Metrics.marginSmall,
        borderWidth  :4,
        borderColor : 'black'
    },
    dateandTime : {
        backgroundColor : 'white',
        width : Metrics.screenWidth * 0.670
    },
    eventContent: {
        marginVertical : Metrics.marginSmall,
        backgroundColor : 'white',
        borderWidth  :4,
        borderColor : 'black'
    },
    socialMedia : {
        backgroundColor : 'white',
        marginVertical : Metrics.marginSmall
    },
    textinput : {
        backgroundColor : 'white',
        borderWidth  :4,
        borderColor : 'black'
    },
    title:{
        textAlign : 'center',
        padding : Metrics.paddingMedium,
        fontSize : Metrics.h2
    },
    submitButton : {
        width : Metrics.screenWidth/2,
        marginVertical : Metrics.marginSmall,

    }
})