import React , {useState,useEffect} from 'react';
import {ScrollView,Text,Image } from 'react-native';
import {Button, Col} from 'native-base'
import CustomTextInput from '../../Components/TextInput/TextInput';
import styles from './styles';
import Colors from '../../Themes/Colors';
import Images from '../../Themes/Images';
const Login = (props) => {
    const [rollNo,setRolNo] = useState("");
    const [password,setPassword] = useState("");
    let onsubmit = ()=>{
        console.log(rollNo);
        console.log(password);
        setRolNo("");
        setPassword("");
        props.navigation.push('Home');
    }

    return(
        <ScrollView contentContainerStyle={styles.screen}>
            <Image source={Images.logo} />
            <CustomTextInput 
            labelName='Enter Your Roll No.'
            value={rollNo}
            valueChange = {setRolNo}
            placeholder={'20XX-XXX-XXX'}
            />
            <CustomTextInput
            labelName="Enter Your Pasword"
            value={password}
            valueChange = {setPassword}
            placeholder = {'Enter your Password!'}
            />
          <Button full onPress={onsubmit} color={Colors.logoColor}>
            <Text style={{color:'white'}}>LOGIN</Text>
          </Button>
          </ScrollView>
    )
}

export default Login;