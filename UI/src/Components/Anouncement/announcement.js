import React, { useEffect, useState } from 'react';
import { Card, Title, Paragraph, Subheading, Modal, Portal, Dialog ,ActivityIndicator , Colors} from 'react-native-paper';
import { ScrollView, View, TouchableOpacity,Image } from 'react-native'
import styleCard from './style';
import metrics from '../../Themes/Metrics';
import { SocialIcon } from 'react-native-elements'
import { EVENTS_URL } from '../../Utils/constants';
const Announcements = props => {
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [loading,setLoading] = useState(true);
    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");
    const [body,setBody] = useState("");
    const [data,setData ] = useState([]);
    useEffect(()=>{
        setLoading(true);
        fetch(EVENTS_URL,{
            method:'GET',
            headers: {
             'Content-Type': 'application/json',
             'Accept' : 'application/json'
            }
        }).then((response) => response.json())
        .then(oEvents=>{
            console.log('Hi');
            // console.log(oEvents)
            setData(oEvents);
            setLoading(false);
            console.log("Getting data from backend!");
            // console.log(data);
        }).catch(err=>{
            console.log(err);
            alert(err.stack.message);
        })
    },[])

    return (
        <View>
            <Title style={styleCard.announcementHeading}>{props.title} 🚀</Title>
            {
                loading ? ( <View style={styleCard.loadingContainer}>
                    <ActivityIndicator animating={true} size="large" color={Colors.red800} />
               </View>
                   ) : (<View style={styleCard.announcementContainer}>
                   <Portal>
                       <Dialog visible={visible} onDismiss={hideModal}>
                           <Dialog.ScrollArea style={{ backgroundColor: '#548CA8' }}>
                               <ScrollView contentContainerStyle={{ height: metrics.screenHeight / 1.5, alignItems: 'center', justifyContent: 'center', paddingVertical: 20 }}>
                                   <Dialog.Title>
                                       {title}
                                   </Dialog.Title>
                                   <Dialog.Content>
                                       <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                           <Subheading style={{ fontWeight: 'bold' }}>Posted On : {date}</Subheading>
                                       </View>
                                       <Paragraph>
                                           {body}
                                       </Paragraph>
                                       <View style={{ marginVertical: metrics.marginMedium }}>
                                           <SocialIcon
                                               type='instagram'
                                               button
                                               title="Open in Instagram"
                                           />
                                           <SocialIcon
                                               type='facebook'
                                               button
                                               title="Open in Facebook"
                                           />
                                       </View>
                                   </Dialog.Content>
                               </ScrollView>
                           </Dialog.ScrollArea>
                       </Dialog>
                   </Portal>
                   <View style={styleCard.announcementScrollView}>
                       <ScrollView>
                           {
                               data.length > 0 && data.map((item, index) =>
                               (
                                   <TouchableOpacity key={index}  onPress={() => { setTitle(data[index].name); setBody(data[index].body); setDate(data[index].date); showModal() }}>
                                       <Card style={{ ...styleCard.announcementCard }}>
                                           <Card.Content>
                                               <View style={styleCard.HeadingStyle}>
                                                   <Title>
                                                       {item.name}
                                                   </Title>
                                                   <Title>
                                                       📅{item.date}
                                                   </Title>
                                               </View>
                                               <Paragraph>
                                                   {item.info}
                                               </Paragraph>
                                               <View style={styleCard.club}>
                                                   <Subheading style={styleCard.SubheadingStyle}>{item.Organiser}</Subheading>
                                               </View>
                                           </Card.Content>
                                       </Card>
                                   </TouchableOpacity>
                               )
                               )
                           }
                       </ScrollView>
                   </View>
               </View>)
            }
        </View>
    )
}

export default Announcements;