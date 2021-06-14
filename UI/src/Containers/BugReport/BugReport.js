import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native';

const BugReport = () => {
    const [text, setText] = React.useState('');

    return (
        <ScrollView>
            <TextInput
                label="Password"
                secureTextEntry
                right={<TextInput.Icon name="eye" />}
            />
            <TextInput
                label="Password"
                secureTextEntry
                right={<TextInput.Icon name="eye" />}
            />
            <TextInput
                label="Password"
                secureTextEntry
                right={<TextInput.Icon name="eye" />}
            />
        </ScrollView>
    );
};

export default BugReport;