import React , {useState,useEffect} from 'react';
import {ScrollView,Text,Image ,View,TouchableOpacity} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useSelector,useDispatch } from 'react-redux';
import styles from './styles';
import Colors from '../../Themes/Colors';
import Images from '../../Themes/Images';
import metrics from '../../Themes/Metrics';
import {adminLogin} from '../../Redux/Thunks/auth'

const AdminLogin = (props) => {
    const dispatch = useDispatch();
    const [ClubId, setClubId] = useState("");
    const [Password, setPassword] = useState("");
    const [isLoading,setisLoading] = useState(false);
    let onsubmit =async () => {
        setisLoading(true);
        console.log(ClubId,Password)
        dispatch(adminLogin(ClubId,Password));
        setTimeout(()=>{
          setisLoading(false);
        },5000)
    }

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <Image  style = {styles.logoimage}source={Images.logo} />
            <TextInput
            mode="outlined" 
            label="ClubID"
            placeholder = "Enter your Club ID"
            value={ClubId}
            style={styles.textInput}
            onChangeText = {(text)=>setClubId(text)}
            />
            <TextInput
            label="Pasword"
            value={Password}
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
              <TouchableOpacity onPress={()=>props.navigation.navigate('Login')} style={styles.texts}>
                  <Text style={{color:'blue',fontSize : metrics.h3}}>User Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.texts} onPress={()=>props.navigation.navigate('Signup')}>
                <Text style={{color : 'blue',fontSize :metrics.h3}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
    )
}

export default AdminLogin;