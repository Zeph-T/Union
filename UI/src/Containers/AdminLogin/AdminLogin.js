import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import {TextInput } from 'react-native-paper';
import {Button, Col} from 'native-base'
import Colors from '../../Themes/Colors';
import Images from '../../Themes/Images';
import metrics from '../../Themes/Metrics';

const AdminLogin = (props) => {
    const [clubId, setClubId] = useState("");
    const [Password, setPassword] = useState("");
    const [rnPassword, setrnPassword] = useState(false);
    let onsubmit = () => {
        console.log(rollNo);
        console.log(password);
        setRolNo("");
        setPassword("");
        props.navigation.navigate('App');
    }
    let onPressSignUp = () => {
        props.navigation.navigate('Signup');
    }

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View style={styles.logoimage}>
                <Image style={styles.logoimage} source={Images.logo} />
            </View>
            <TextInput label="Club ID" style={styles.textInput} mode='outlined' value={clubId} onChangeText={text => setClubId(text)} />
            <TextInput
                mode="outlined"
                secureTextEntry={rnPassword}
                style={styles.textInput}
                label="Repeat New Password"
                value={Password}
                onChange={(text) => setPassword(text)}
                right={<TextInput.Icon name="eye" onPress={() => setrnPassword(!rnPassword)} />}
            />
            <Button full onPress={onsubmit} color={Colors.logoColor}>
                <Text style={{ color: 'white' }}>LOGIN</Text>
            </Button>

            <View style={styles.extrabuttons}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} style={styles.texts}>
                    <Text style={{ color: 'blue', fontSize: metrics.h3 }}>User Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.texts} onPress={() => props.navigation.navigate('Signup')}>
                    <Text style={{ color: 'blue', fontSize: metrics.h3 }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AdminLogin;