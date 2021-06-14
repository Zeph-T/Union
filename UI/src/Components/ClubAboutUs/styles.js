import {StyleSheet} from 'react-native';
import Colors from '../../Themes/Colors';
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    card:{
        width:Metrics.screenWidth*0.98
    },
    Content:{
        flexDirection:'row',
        justifyContent : 'space-around'
    },
    title:{
        margin:5
    },
    cardStyle:{
     shadowRadius: 4, 
     shadowColor: 'black', 
     shadowOpacity: 10, 
     marginVertical:Metrics.marginLarge,
     marginHorizontal : Metrics.marginSmall
    },
    socialIcons : {
        flexDirection : 'row'
    },
    cardImage : { borderColor: 'black', borderWidth: 3 },
    paragraph : { color: 'black', fontSize: Metrics.h3 },


    socialMediaContent : {
        padding:Metrics.paddingExtraSmall
    },
    socialMediaContainer : {
        flexDirection:'row',
        justifyContent:'space-evenly'
        // marginVertical:Metrics.marginSmall
    }

})