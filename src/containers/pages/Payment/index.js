import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const IconOptions = props => {
  return (
    <TouchableOpacity>
      <View style={{marginHorizontal: 15, alignItems: 'center'}}>
        <View style={styles.IconOptions}>
          <Image source={props.image} />
        </View>
        <Text style={{maxWidth: 80, textAlign: 'center', color: 'black'}}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const IconScan = props => {
  return (
    <TouchableOpacity>
      <View style={styles.IconScan}>
        <Image source={props.image} />
      </View>
    </TouchableOpacity>
  );
};

export default function Pay() {
  return (
    // qrscan
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <IconScan />
        <View style={{flexDirection: 'row'}}>
          <IconScan />
          <IconScan />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 10}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
          Use camera to scan QR code and pay
        </Text>
      </View>
      {/* qr description */}
      <View style={{height: 250, backgroundColor: 'white'}}>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <View style={{height: 3, width: 40, backgroundColor: 'grey', marginTop: 10}}></View>
          <View style={{height: 3, width: 40, backgroundColor: 'grey', marginTop: 5}}></View>
        </View>
        <View style={styles.qrTitle}>
          <Text style={styles.qrTitleText}>More options</Text>
          <View style={{flexDirection: 'row',  alignItems: 'center'}}>
            <View
              style={{backgroundColor: 'green', height: 20, width: 20, borderRadius: 10}}>
              <Image />
            </View>
            <Text style={styles.qrTitleText2}>SHORTCUT</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <IconOptions title="Phone number" />
            <IconOptions title="GoPay code" />
          </View>
          <View style={{height: 100, width: 2, backgroundColor: 'grey'}}></View>
          <Text style={{maxWidth: 300, marginLeft: 20, fontSize: 20}}>
            Your recent GoPay receivers will show here. No admin fees!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  qrTitle: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  qrTitleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 22,
  },
  qrTitleText2: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 16,
    marginLeft: 5,
  },
  IconOptions: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'green',
    marginBottom: 5,
    marginTop: 20,
  },
  IconScan: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 10,
  },
});
