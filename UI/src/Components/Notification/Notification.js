import React,{useEffect,useState} from 'react';
import {Card,Title,Paragraph,Subheading , ActivityIndicator, Colors} from 'react-native-paper';
import { ScrollView,View } from 'react-native'
import data from '../../data/dummy-data';
import {useSelector} from 'react-redux';
import styleCard from './style';
import { NOTIFICATIONS_URL } from '../../Utils/constants';


const Notifications = props => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    const {batch} = useSelector((state)=>state.user);
    useEffect(()=>{
        setLoading(true);
        fetch(NOTIFICATIONS_URL+'/'+batch,{
            method:'GET',
            headers: {
             'Content-Type': 'application/json',
             'Accept' : 'application/json'
            }
        }).then((response) => response.json())
        .then(oEvents=>{
            setData(oEvents);
            setLoading(false);
            console.log(oEvents);
            // console.log(data);
        }).catch(err=>{
            console.log(err);
            alert(err.stack.message);
        })
    },[])
    return (
        <View>
            <Title style={styleCard.announcementHeading}>{props.title}📰 </Title>
            {
                loading?( <View style={styleCard.loadingContainer}>
                    <ActivityIndicator animating={true} size="large" color={Colors.red800} />
                    </View>) : (
                    <View style={styleCard.announcementScrollView}>
                    <ScrollView>
                    {
                            data.map((item, index) =>
                            (
                                <Card key={index} style={{ ...styleCard.announcementCard }}>
                                    <Card.Content>
                                        <View style={styleCard.HeadingStyle}>
                                            <Title>
                                                {item.title}
                                            </Title>
                                            <Title>
                                                📅{ new Date(item.date).getFullYear() + "-" + new Date(item.date).getMonth() + '-' + new Date(item.date).getDay()}
                                            </Title>
                                        </View>
                                        <Paragraph>
                                            {item.info}
                                        </Paragraph>
                                        <View style={styleCard.postedby}>
                                            <Subheading style={styleCard.SubheadingStyle}>Posted By : {item.postedby}</Subheading>
                                        </View>
                                    </Card.Content>
                                </Card>
                            )
                            )
                        }
                    </ScrollView>
                </View>
                )
            }
        </View>
    )
}

export default Notifications;