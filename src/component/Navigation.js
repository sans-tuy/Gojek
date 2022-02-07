import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Navigation = ({onPress}) => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity style={styles.iconnav}>
        <Image source={require('../assets/icon/home-active.png')} />
        <Text style={styles.navTextActive}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconnav} onPress={onPress}>
        <Image source={require('../assets/icon/order.png')} />
        <Text style={styles.navText}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconnav}>
        <Image source={require('../assets/icon/help.png')} />
        <Text style={styles.navText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconnav}>
        <Image source={require('../assets/icon/inbox.png')} />
        <Text style={styles.navText}>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconnav}>
        <View>
          <Image source={require('../assets/icon/account.png')} />
          <View style={styles.notif}></View>
        </View>
        <Text style={styles.navText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconnav: {
    alignItems: 'center',
  },
  navTextActive: {
    color: '#43AB4A',
    fontSize: 12,
    fontWeight: 'bold',
  },
  navText: {
    color: '#5E5E5E',
    fontSize: 12,
  },
  notif: {
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    position: 'absolute',
    right: 0,
  },
});

export default Navigation;
