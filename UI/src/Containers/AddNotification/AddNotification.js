import React, { useState } from 'react';
import { View, Button, ScrollView, Text, SafeAreaView } from 'react-native';
import { TextInput, Dialog, Portal, Title, Subheading, RadioButton } from 'react-native-paper';
import MultiSelect from 'react-native-multiple-select';
import items from '../../Utils/batches';
import styleCard from './styles';
import { ADD_NOTIFICATION_URL } from '../../Utils/constants';
const AddNotification = (props) => {
    const [eventName, setEventName] = useState('');
    const [title, setTitle] = useState('');
    const [checked, setChecked] = useState('first');
    const [mode, setMode] = useState('date');
    const [selectedItems, setSelectedItems] = useState([]);
    let multiSelect;
    const [eventBody , setEventBody] = useState("");
const AddNotif = () => {
        let batches = [];
        let allMembers;
        if(checked === 'first'){
            allMembers = true;
        }else{
            selectedItems.forEach(item=>{
                batches.push(items.find(oItem=>oItem.id == item));
            });
            batches = batches.map(oBatch=> oBatch.name);
            allMembers = false;
        }
        // console.log(batches);
        let body = {
            PostedBy : eventName,
            title : title,
            info : eventBody,
            allMembers : allMembers,
            Batches : batches
        }
        fetch(ADD_NOTIFICATION_URL,{
            method:'POST',
            headers: {
             'Content-Type': 'application/json',
             'Accept' : 'application/json'
            },
            body :JSON.stringify(body) 
        }).then(res=>res.json()).then(res=>{
            console.log(res);
            alert(res.message);
        }).catch(err=>{
            alert(err.message);
        })
    }

    const onSelectedItemsChange = selectedItems => {
        setSelectedItems(selectedItems);
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Title style={styleCard.title}>Post a Notification 🎃</Title>
                <Subheading></Subheading>
                <TextInput
                    mode="outlined"
                    label="Posted By"
                    value={eventName}
                    style={styleCard.textinput}
                    onChangeText={text => setEventName(text)}
                />
                <TextInput
                    label="Title"
                    value={title}
                    mode="outlined"
                    style={styleCard.textinput}
                    onChangeText={text => setTitle(text)}
                    multiline
                    underlineColor="red"
                    numberOfLines={2}
                />
                <TextInput
                    label="Notification"
                    value={eventBody}
                    mode="outlined"
                    style={styleCard.textinput}
                    onChangeText={text => setEventBody(text)}
                    multiline
                    numberOfLines={5}
                />
                <View style={{ ...styleCard.textinput }}>
                    <View style={styleCard.radioBtn}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => { setSelectedItems([]); setChecked('first') }}
                            label="Send to All Batches"
                            color="red"
                        />
                        <Text style={styleCard.radioLabel}> Send to All Batches</Text>
                    </View>
                    <View style={styleCard.radioBtn}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            label="Send to Specific Batches"
                            color="red"
                        />
                        <Text style={styleCard.radioLabel}>Send to Specific Batches!</Text>
                    </View>
                    {
                        checked == 'second' && <MultiSelect
                            hideTags
                            items={items}
                            uniqueKey="id"
                            ref={(component) => { multiSelect = component }}
                            onSelectedItemsChange={onSelectedItemsChange}
                            selectedItems={selectedItems}
                            searchInputPlaceholderText="Select Batches..."
                            onChangeInput={(text) => console.log(text)}
                            tagRemoveIconColor="#CCC"
                            tagBorderColor="#CCC"
                            tagTextColor="#CCC"
                            selectedItemTextColor="blue"
                            selectedItemIconColor="blue"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{ color: '#CCC' }}
                            submitButtonColor="blue"
                            submitButtonText="Select"
                        />
                    }
                </View>
                <View style={styleCard.submitButton}>
                    <Button onPress={()=>AddNotif()} title='post' color='red' />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddNotification; 