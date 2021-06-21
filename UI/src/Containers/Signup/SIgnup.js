import * as React from 'react';
import { TextInput, Button, Title } from 'react-native-paper';
import { ScrollView, View } from 'react-native';
import batches from '../../Utils/batches';
import Styles from './styles'
import DropDown from 'react-native-paper-dropdown';

const SignUp = () => {
    const [name, setname] = React.useState("");
    const [email, setemail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [Batch, setBatch] = React.useState("");
    const [RollNo, setRollNo] = React.useState("");
    const [rnPassword, setrnPassword] = React.useState(false);
    const [showDropDown , setShowDropDown] = React.useState(false);

    return (
        <ScrollView>
            <Title style={Styles.heading}>Reset Password</Title>
            <View style={Styles.screen} >
                <TextInput
                    mode="outlined"
                    label="Name"
                    value={name}
                    style={Styles.textInput}
                    onChange={text => setname(text)}
                />
                <TextInput
                    mode="outlined"
                    style={Styles.textInput}
                    label="Email"
                    onChange={(text) => setemail(text)}
                />
                <TextInput
                    mode="outlined"
                    secureTextEntry={rnPassword}
                    style={Styles.textInput}
                    label="Repeat New Password"
                    secureTextEntry
                    value={Password}
                    onChange={(text) => setPassword(text)}
                    right={<TextInput.Icon name="eye" onPress={() => setrnPassword(!rnPassword)} />}
                />
                <View style={Styles.textInput}>
                    <DropDown
                        label={"Social Media Name"}
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
                    onChange={(text)=>setRollNo(text)}
                />
                <Button labelStyle={Styles.buttonLabel} style={Styles.submit}>SignIN</Button>
            </View>
        </ScrollView>

    );
};

export default SignUp;