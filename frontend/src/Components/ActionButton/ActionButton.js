import React,{useState} from 'react';
import {FAB,Portal,Provider} from 'react-native-paper';

const ActionButton  = (props) => {
    const [state,setState] = useState({open:false});
    const onStateChange = ({open})=>setState({open})
    const {open} = state;
    return(
        <Provider>
        <Portal>
          <FAB.Group
          style ={{flexDirection : 'column',justifyContent : 'flex-end'}}
            open={open}
            icon={open ? '' : 'plus'}
            actions={[
              {
                icon: 'calendar-plus',
                label: 'Add an Event',
                onPress: () => props.navigation.navigate('addEvent'),
              },
              {
                icon: 'email',
                label: 'Send a Notification',
                onPress: () => props.navigation.navigate('addNotification'),
              },
              {
                icon: 'bell',
                label: 'Remind',
                onPress: () => console.log('Pressed notifications'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    )


}

export default ActionButton;