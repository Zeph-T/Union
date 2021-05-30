import {StyleSheet } from 'react-native';
import Metrics from '../../Themes/Metrics';


export default StyleSheet.create({
    announcementCard:{
        margin : Metrics.screenHeight/100,
        marginBottom : 0,
        shadowColor : 'black',
        shadowOffset :{
            width : 0,
            height : 2
        },
        shadowRadius : 8,
        elevation : 5,
        borderRadius :0,
        backgroundColor : 'white'
    },
    announcementScrollView:{
        height : Metrics.screenHeight/3.4,
    },
    announcementHeading : {
        fontSize  : 30,
        fontWeight : '200',
        color : 'black',
        fontWeight :'300',
        fontFamily :'sans-serif-medium',
        marginVertical : Metrics.marginSmall,
        marginLeft : Metrics.marginSmall
    }
})