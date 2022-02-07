import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Gopay = () => {
  return (
    <View>
      <View style={styles.gopay}>
        <Image
          source={require('../assets/icon/gopay.png')}
          style={styles.gopayIcon}
        />
        <Text style={styles.money}>Rp 50.000</Text>
      </View>
      <View style={styles.gopayItems}>
        <View style={styles.gopayItem}>
          <Image source={require('../assets/icon/pay.png')} />
          <Text style={styles.gopayItemText}>Pay</Text>
        </View>
        <View style={styles.gopayItem}>
          <Image source={require('../assets/icon/nearby.png')} />
          <Text style={styles.gopayItemText}>Nearby</Text>
        </View>
        <View style={styles.gopayItem}>
          <Image source={require('../assets/icon/topup.png')} />
          <Text style={styles.gopayItemText}>Top Up</Text>
        </View>
        <View style={styles.gopayItem}>
          <Image source={require('../assets/icon/more.png')} />
          <Text style={styles.gopayItemText}>More</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gopay: {
    flexDirection: 'row',
    backgroundColor: '#2B5EB7',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    alignItems: 'center',
  },
  money: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gopayItems: {
    backgroundColor: '#4977C8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    padding: 20,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    alignItems: 'center',
  },
  gopayItem: {
    alignItems: 'center',
  },
  gopayItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Gopay;
