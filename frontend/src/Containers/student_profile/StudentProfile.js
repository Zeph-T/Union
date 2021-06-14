import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Images from '../../Themes/Images'
import Metrics from '../../Themes/Metrics';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StudentProfile = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.imageView}>
          <Image
            source={Images.profilePic}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.edit}
            activeOpacity={0.8}>
            <MaterialIcons name="edit" size={Metrics.h3} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Hey User!</Text>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={()=>navigation.navigate('ResetPassword')}>
          <MaterialIcons name="vpn-key" size={Metrics.h2} />
          <Text style={styles.text}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={()=>navigation.navigate('ReachUs')}>
          <MaterialIcons
            name="local-phone"
            size={Metrics.h2}
          />
          <Text style={styles.text}>Reach Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}>
          <MaterialIcons name="logout" size={Metrics.h2}  />
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    )
}


export default StudentProfile;