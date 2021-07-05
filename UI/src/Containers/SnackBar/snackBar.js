import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import Colors from '../../Themes/Colors';
import metrics from '../../Themes/Metrics';
const SnackBar = (props) => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);


  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
      <Snackbar
        style={{backgroundColor : Colors.SnackBarColor,padding : metrics.paddingExtraSmall/3}}
        visible={props.visible}
        >
       {props.message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default SnackBar;