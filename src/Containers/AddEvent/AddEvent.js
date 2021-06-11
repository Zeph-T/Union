import React, { useState } from 'react';
import { View ,Button,ScrollView} from 'react-native';
import { TextInput, Dialog, Portal,Title} from 'react-native-paper';
import styleCard from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDown from 'react-native-paper-dropdown';
import metrics from '../../Themes/Metrics';

const AddEvent = () => {
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [time, setTime] = useState("");
    const [URL, setURL] = useState();
    const [socialMediaURLs, setSocialMediaURLs] = useState([]);
    const [visible, setVisible] = useState(false);
    const showDialog = () => setVisible(true);
    const [showDropDown, setShowDropDown] = useState(false);
    const [socialMedia , setSocialMedia] = useState("");
    const socialMediaList = [
        { label: "Instagram", value: "Instagram" },
        { label: "Facebook", value: "Facebook" },
        { label: "Medium", value: "Medium" },
        { label: "Linkedin" , value : "Linkedin"},
        { label: "Website" , value : "Website" },
        { label : "Youtube" , value : "Youtube"},
        { label : "Github", value : "Github"}
    ];

    const hideDialog = () =>{
        setSocialMedia("");
        setURL("");
        setVisible(false);
    } 


    const onChange = (event, input) => {
        setShow(Platform.OS === 'ios');
        if (mode === 'date') {
            const currentDate = input || date;
            setDate(currentDate);
        } else {
            setTime(input);
        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    const insertSocialMediaLink = () => {
        let tempMedia = socialMediaURLs;
        tempMedia.push({
            socialMedia : socialMedia,
            URL : URL
        });
        setSocialMedia("");
        setURL("");
        setSocialMediaURLs(tempMedia);
        setVisible(false);
    }

    const removeLink = (index) => {
        let stateSnapShot = JSON.parse(JSON.stringify(socialMediaURLs));
        let newState = [];
        stateSnapShot.forEach((data)=>{
            if(data.socialMedia !== index.socialMedia){
                newState.push(data);
            }
        })
        setSocialMediaURLs(newState)
    }

    return (
        <ScrollView contentContainerStyle={styleCard.screen}>
            <Title style={styleCard.title}>Create an Event 🎃</Title>
            <TextInput
                label="Event Name"
                value={eventName}
                style={styleCard.textinput}
                onChangeText={text => setEventName(text)}
            />
            <View style={styleCard.buttonContainer}>
                <TextInput label="Event Date" value={new Date(date).toLocaleDateString()} disabled style={styleCard.dateandTime} />
                <View style={styleCard.button}> 
                <Button onPress={showDatepicker} title=" set Date "  />
                </View>
            </View>
            <View style={styleCard.buttonContainer}>
                <TextInput label="Event Time" value={new Date(time).toLocaleTimeString() ? new Date(time).toLocaleTimeString() : ""} disabled style={styleCard.dateandTime} />
                <View style={styleCard.button}>
                <Button onPress={showTimepicker} title=" set Time " style={styleCard.button} />
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <TextInput style={styleCard.eventContent} label="Event Content" multiline={true} numberOfLines={5} />
            <Button title="Add Social Media Link" onPress={showDialog} />
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Social Media</Dialog.Title>
                    <Dialog.Content>
                        <View style={{marginVertical : metrics.marginSmall}}>
                        <DropDown
                            label={"Social Media Name"}
                            mode={"outlined"}
                            value={socialMedia}
                            setValue={setSocialMedia}
                            list={socialMediaList}
                            visible={showDropDown}
                            style={{}}
                            showDropDown={() => setShowDropDown(true)}
                            onDismiss={() => setShowDropDown(false)}
                            inputProps={{
                                right: <TextInput.Icon name={"menu-down"} />,
                            }}
                        />                            
                        </View>
                        <TextInput mode={'outlined'} value={URL} onChangeText={setURL} placeholder='Link' />

                    </Dialog.Content>
                    <Dialog.Actions style={{flexDirection : 'row',justifyContent : 'space-evenly'}}>
                        <View style={styleCard.button}>
                        <Button onPress={insertSocialMediaLink} title="Add event" />
                        </View>
                        <View style={styleCard.button}>
                        <Button onPress={hideDialog}  title="Cancel" />
                        </View>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            {socialMediaURLs.map((value, index) => {
                return (
                    <View>
                        <TextInput  style={styleCard.socialMedia} label={value.socialMedia} value={value.URL} right={<TextInput.Icon name="delete" onPress={()=>removeLink(value)} />} />
                    </View>
                )
            })}
            <View  style={styleCard.submitButton}>
            <Button title='post' color='red'/>
            </View>
        </ScrollView>
    );
};

export default AddEvent;