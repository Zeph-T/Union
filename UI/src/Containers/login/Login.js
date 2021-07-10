import React , {useState,useEffect} from 'react';
import {ScrollView,Text,Image ,View,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
// import {Button, Col} from 'native-base'
import CustomTextInput from '../../Components/TextInput/TextInput';
import { useSelector,useDispatch } from 'react-redux';
import styles from './styles';
import Colors from '../../Themes/Colors';
import Images from '../../Themes/Images';
import metrics from '../../Themes/Metrics';
import {login} from '../../Redux/Thunks/auth'


const Login = (props) => {
    const dispatch = useDispatch();
    const [email,setEmail] = useState("");
    const [isLoading,setisLoading] = useState(false);
    const [password,setPassword] = useState("");
    let onsubmit = async()=>{
      setisLoading(true);
        console.log(password);
        let response = await(dispatch(login(email,password)))
        if(response){
          alert(response);
        }
        setisLoading(false);
        // props.navigation.navigate('App');
    }
    let onPressSignUp = () => {
      props.navigation.navigate('Signup');
    }

    return(
        <ScrollView contentContainerStyle={styles.screen}>
            <Image  style = {styles.logoimage}source={Images.logo} />
            <TextInput
            mode="outlined" 
            label="Email"
            placeholder = "Enter your Email"
            value={email}
            style={styles.textInput}
            onChangeText = {(text)=>setEmail(text)}
            />
            <TextInput
            label="Pasword"
            value={password}
            mode="outlined" 
            style={styles.textInput}
            onChangeText = {(text)=>setPassword(text)}
            placeholder = {'Enter your Password!'}
            />
          <Button mode="contained" loading={isLoading} full onPress={onsubmit}>
            {/* <Text style={{color:'white'}}>LOGIN</Text> */}
            Login
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