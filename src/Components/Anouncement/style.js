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
        backgroundColor :'white',
        borderRadius : 10,
        // borderColor : 'black',
        // borderWidth : 5
    },
    announcementScrollView:{
        height : Metrics.screenHeight/3,
    },
    announcementHeading : {
        fontSize  : 30,
        fontWeight : '200',
        color : 'black',
        fontWeight :'300',
        fontFamily :'sans-serif-medium',
        marginVertical : Metrics.marginSmall,
        marginLeft : Metrics.marginSmall
    },
    announcementContainer:{
        marginVertical : Metrics.marginSmall,
    },
    HeadingStyle:{
        flexDirection:'row',
        justifyContent :'space-between'
    },
    club:{
        flexDirection : 'row',
        justifyContent : 'flex-end'
    },
    SubheadingStyle : {
        fontWeight : 'bold',
        color:'grey'
    },
})