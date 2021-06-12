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
        marginHorizontal : Metrics.marginMedium,
        marginBottom : Metrics.marginMedium,
        backgroundColor : 'white',
        // shadowColor : 'black',
        // shadowOffset :{
        //     width : 0,
        //     height : 2
        // },
        // shadowRadius : 8,
        // elevation : 5,
        // borderRadius :0,
    },
    title:{
        textAlign : 'center',
        marginTop : Metrics.marginMedium,
        padding : Metrics.paddingMedium,
        fontSize : Metrics.h2
    },
    submitButton : {
        width : Metrics.screenWidth/2,
        marginVertical : Metrics.marginSmall,
        marginHorizontal : Metrics.marginMedium

    },
    radioBtn : {
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    radioLabel : {
        marginTop : Metrics.marginSmall/1.5
    }
    
})