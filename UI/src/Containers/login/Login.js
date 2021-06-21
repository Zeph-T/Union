import React , {useState,useEffect} from 'react';
import {ScrollView,Text,Image ,View,TouchableOpacity} from 'react-native';
import {Button, Col} from 'native-base'
import CustomTextInput from '../../Components/TextInput/TextInput';
import styles from './styles';
import Colors from '../../Themes/Colors';
import Images from '../../Themes/Images';
import metrics from '../../Themes/Metrics';
const Login = (props) => {
    const [rollNo,setRolNo] = useState("");
    const [password,setPassword] = useState("");
    let onsubmit = ()=>{
        console.log(rollNo);
        console.log(password);
        setRolNo("");
        setPassword("");
        props.navigation.navigate('App');
    }
    let onPressSignUp = () => {
      props.navigation.navigate('Signup');
    }

    return(
        <ScrollView contentContainerStyle={styles.screen}>
            <Image source={Images.logo} />
            <CustomTextInput 
            labelName='Enter Your Email'
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
            <Text style={{color:'white'}}>LOGIN</Text>
            <View style={styles.extrabuttons}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('AdminLogin')} style={styles.texts}>
                  <Text style={{color:'blue',fontSize : metrics.h3}}>Admin Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.texts} onPress={()=>props.navigation.navigate('Signup')}>
                <Text style={{color : 'blue',fontSize :metrics.h3}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
    )
}

export default Login;