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
        backgroundColor : 'white',
        shadowColor : 'black',
        shadowOpacity : 10,
        height : Metrics.screenHeight/10
    },
    buttonContainer:{
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginTop : Metrics.marginSmall
    },
    dateandTime : {
        backgroundColor : 'white',
        width : Metrics.screenWidth * 0.65
    },
    eventContent: {
        marginTop : Metrics.marginSmall,
        backgroundColor : 'white'
    }
})