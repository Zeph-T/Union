import {StyleSheet} from 'react-native';
import Metrics from '../../Themes/Metrics';
import {widthPercentageToDP} from '../../Themes/PercentageToDPConverter';
import Colors from '../../Themes/Colors';
export default StyleSheet.create({
    screen:{
        justifyContent : 'center',
        marginTop : Metrics.screenHeight/5,
        marginHorizontal : Metrics.marginSmall
    },
    textInput:{
        marginBottom :Metrics.marginSmall,
        backgroundColor : 'white',
        shadowOpacity :10,
        shadowColor : 'black'
    },
    heading:{
        fontSize : Metrics.h1,
        marginTop : Metrics.marginMedium,
        paddingTop : Metrics.paddingMedium
    },
    submit:{
        backgroundColor : Colors.logoColor,
        color:'white'
    },
    buttonLabel :{
        color:'white'
    },
    extrabuttons:{
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    logo:{
        marginBottom:Metrics.marginSmall
    },
    texts : {
        marginVertical : Metrics.marginMedium,
        marginHorizontal : Metrics.marginMedium,
    },
});