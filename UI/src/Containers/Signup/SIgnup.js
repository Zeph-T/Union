import * as React from 'react';
import { TextInput, Button, Title, DarkTheme} from 'react-native-paper';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import Styles from './styles'
import DropDown from 'react-native-paper-dropdown';
import Images from '../../Themes/Images';
import metrics from '../../Themes/Metrics';
import axios from 'axios';
import { SIGNUP_URL } from '../../Utils/constants';
const batches = [{
    label: '2018 BCS',
    value: '2018 BCS'
}, {
    label: '2019 BCS',
    value: '2019 BCS'
}, {
    label: '2020 BCS',
    value: '2020 BCS'
}, {
    label: '2019 IMT',
    value: '2017 IMT'
}, {
    label: '2018 IMT',
    value: '2018 IMT'
}, {
    label: '2019 IMT',
    value: '2019 IMT'
}, {
    label: '2020 IMT',
    value: '2020 IMT'
}, {
    label: '2017 IMG',
    value: '2017 IMG'
}, {
    label: '2018 IMG',
    value: '2018 IMG'
}, {
    label: '2019 IMG',
    value: '2019 IMG'
}, {
    label: '2020 IMG',
    value: '2020 IMG'
}
];


const SignUp = (props) => {
    const dispatch = useDispatch();
    const [name, setname] = React.useState("");
    const [email, setemail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [Batch, setBatch] = React.useState("");
    const [RollNo, setRollNo] = React.useState("");
    const [rnPassword, setrnPassword] = React.useState(false);
    const [showDropDown, setShowDropDown] = React.useState(false);
    const [loading,setLoading] = React.useState(false);
    const redirectToLogin = () => {
        props.navigation.navigate('Login')
    }


    const handleSubmit = async() => {
        if(name==""||email==""||Password==""||Batch==""){
            alert('Fill All the details!')
            return;
        }
        try{
            setLoading(true);console.log('hi')

            const data = {"Name": name,"Email":email,"Password":Password,"Batch" :  Batch,"RollNo" : RollNo};
            fetch(SIGNUP_URL,{
                method:'POST',
                headers: {
                 'Content-Type': 'application/json',
                 'Accept' : 'application/json'
                },
                body : JSON.stringify(data)
            }).then(res=>res.json()).then((res)=>{
                alert(res.message);
                setTimeout(()=>{

                },1000);
                props.navigation.navigate('Login')
            }).catch(err=>{
                console.log(err);
                alert('Error Occured!')
            })
            setLoading(false);
        }catch(err){
            setLoading(false);
            console.log(err);
        }

    }


    return (
        <ScrollView>
            <View style={Styles.screen} >
                <Image style={Styles.logo} source={Images.logo} />
                <TextInput
                    mode="outlined"
                    label="Name"
                    value={name}
                    style={Styles.textInput}
                    onChangeText={text => setname(text)}
                />
                <TextInput
                    mode="outlined"
                    style={Styles.textInput}
                    label="Email"
                    onChangeText={(text) => setemail(text)}
                />
                <TextInput
                    mode="outlined"
                    secureTextEntry={rnPassword}
                    style={Styles.textInput}
                    label="Password"
                    value={Password}
                    onChangeText={(text) => setPassword(text)}
                    // right={<TextInput.Icon name="eye" onPress={() => setrnPassword(!rnPassword)} />}
                />
                <View style={Styles.textInput}>
                    <DropDown
                        label={"Select your Batch"}
                        mode={"outlined"}
                        value={Batch}
                        setValue={setBatch}
                        list={batches}
                        visible={showDropDown}
                        style={{}}
                        showDropDown={() => setShowDropDown(true)}
                        onDismiss={() => setShowDropDown(false)}
                        inputProps={{
                            right: <TextInput.Icon name={"menu-down"} />,
                        }}
                    />
                </View>
                <TextInput
                    mode="outlined"
                    style={Styles.textInput}
                    label="Roll Number"
                    value={RollNo}
                    onChangeText={(text) => setRollNo(text)}
                />
                <Button labelStyle={Styles.buttonLabel} onPress={handleSubmit} loading={loading} style={Styles.submit}>SignIN</Button>
                <View style={Styles.extrabuttons}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('AdminLogin')} style={Styles.texts}>
                        <Text style={{ color: 'blue', fontSize: metrics.h3 }}>Admin Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.texts} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{ color: 'blue', fontSize: metrics.h3 }}>User Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
};

export default SignUp;