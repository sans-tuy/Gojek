import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Nearby from './Nearby';

const News = props => {
  return (
    <View>
      {/* news 1 */}
      <View style={styles.News}>
        <Image source={{uri: props.link}} style={styles.newsImage} />
        <View style={styles.logoBackground}></View>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../assets/logo/white.png')}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.newsTitle}>GO - NEWS</Text>
        <Text style={styles.newsSubtitle}>
          Berita terbaru mengenai teknologi komputer kuantum dapat terealisasikan dalam 40 tahun lagi sejak dari sekarang.
        </Text>
        <TouchableOpacity style={styles.buttonNews}>
          <Text style={styles.buttonText}>READ</Text>
        </TouchableOpacity>
      </View>
      {/* news 2 */}
      <View style={styles.News2}>
        <View style={styles.gojekImage}>
          <Image
            source={require('../assets/logo/gojek.png')}
            style={styles.gojek}
          />
        </View>
        <Text style={styles.newsTitle2}>Complete Your Profile</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.facebookImage}>
            <Image
              source={require('../assets/dummy/facebook-connect.png')}
              style={styles.newsImage2}
            />
          </View>
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={styles.newsTitle}>Connect With Facebook</Text>
            <Text style={styles.newsSubtitle2}>
              Login faster without verification code
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonNews}>
          <Text style={styles.buttonText}>CONNECT</Text>
        </TouchableOpacity>
      </View>
      {/* nearby food */}
      <Nearby />
    </View>
  );
};

const styles = StyleSheet.create({
  News: {
    position: 'relative',
    margin: 20,
    borderBottomColor: '#F2F2F4',
    borderBottomWidth: 2,
  },
  News2: {
    marginHorizontal: 20,
    marginTop: -20,
    position: 'relative',
    borderBottomColor: '#F2F2F4',
    borderBottomWidth: 2,
  },
  newsImage: {
    height: 220,
    borderRadius: 6,
    padding: 40,
    width: '100%',
  },
  newsImage2: {
    height: undefined,
    borderRadius: 6,
    padding: 40,
    resizeMode: 'contain',
    flex: 1,
    width: undefined,
  },
  gojek: {
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  facebookImage: {
    height: 100,
    width: 150,
  },
  gojekImage: {
    height: 50,
    width: 70,
  },
  logoWrapper: {
    position: 'absolute',
    top: 10,
    left: 4,
    height: 25,
    width: 70,
  },
  logoImage: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  logoBackground: {
    backgroundColor: 'black',
    width: '100%',
    height: 220,
    position: 'absolute',
    opacity: 0.2,
  },
  newsTitle: {
    marginTop: 24,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  newsTitle2: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  newsSubtitle: {
    marginTop: 3,
    fontSize: 20,
  },
  newsSubtitle2: {
    marginTop: 3,
    fontSize: 20,
  },
  buttonNews: {
    marginTop: 10,
    backgroundColor: 'green',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 12,
  },
});

export default News;
