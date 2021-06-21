import React, { useState } from 'react';
import { View, Button, ScrollView, Text, SafeAreaView } from 'react-native';
import { TextInput, Dialog, Portal, Title, Subheading, RadioButton } from 'react-native-paper';
import MultiSelect from 'react-native-multiple-select';
import items from '../../Utils/batches';
import styleCard from './styles';
const AddNotification = (props) => {
    const [eventName, setEventName] = useState('');
    const [title, setTitle] = useState('');
    const [checked, setChecked] = useState('first');
    const [mode, setMode] = useState('date');
    const [selectedItems, setSelectedItems] = useState([]);
    const [show, setShow] = useState(false);


    let multiSelect;

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
                    value={eventName}
                    mode="outlined"
                    style={styleCard.textinput}
                    onChangeText={text => setEventName(text)}
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
                    <Button title='post' color='red' />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddNotification;