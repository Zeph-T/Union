import * as React from 'react';
import { TextInput,Button, Title } from 'react-native-paper';
import { ScrollView,View } from 'react-native';

import Styles from './styles'

const ForgotPassword = () => {
    const [text, setText] = React.useState('');
    const [oPassword,setoPassword] = React.useState(true)
    const [nPassword,setnPassword] = React.useState(true);
    const [rnPassword,setrnPassword] = React.useState(true);

    return (
        <ScrollView>
            <Title style={Styles.heading}>Reset Password</Title>
        <View style={Styles.screen} >
            <TextInput
                mode="outlined"
                label="Original Password"
                secureTextEntry={oPassword}
                style={Styles.textInput}
                right={<TextInput.Icon name="eye" onPress={()=>setoPassword(!oPassword)} />}
            />
            <TextInput
                mode="outlined"
                secureTextEntry={nPassword}
                style={Styles.textInput}
                label="New Password"
                secureTextEntry
                right={<TextInput.Icon name="eye"onPress={()=> setnPassword(!nPassword) } />}
            />
            <TextInput
                mode="outlined"
                secureTextEntry={rnPassword}
                style={Styles.textInput}
                label="Repeat New Password"
                secureTextEntry
                right={<TextInput.Icon name="eye" onPress={()=> setrnPassword(!rnPassword)} />}
            />
           <Button labelStyle={Styles.buttonLabel} style={Styles.submit}>Reset</Button>
        </View>
        </ScrollView>

    );
};

export default ForgotPassword;