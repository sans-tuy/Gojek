import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const Menu = () => {
  return (
    <View>
      <View style={styles.Menu}>
        {/* Go-Ride */}
        <TouchableOpacity>
          <View style={styles.MenuItems}>
            <View style={styles.iconMenu}>
              <Image source={require('../assets/icon/go-ride.png')} />
            </View>
            <Text style={styles.textMenu}>GO-RIDE</Text>
          </View>
        </TouchableOpacity>
        {/* Go-Car */}
        <TouchableOpacity>
          <View style={styles.MenuItems}>
            <View style={styles.iconMenu}>
              <Image source={require('../assets/icon/go-car.png')} />
            </View>
            <Text style={styles.textMenu}>GO-CAR</Text>
          </View>
        </TouchableOpacity>
        {/* Go-Bluebird */}
        <TouchableOpacity>
          <View style={styles.MenuItems}>
            <View style={styles.iconMenu}>
              <Image source={require('../assets/icon/go-bluebird.png')} />
            </View>
            <Text style={styles.textMenu}>GO-BLUEBIRD</Text>
          </View>
        </TouchableOpacity>
        {/* Go-Food */}
        <TouchableOpacity>
          <View style={styles.MenuItems}>
            <View style={styles.iconMenu}>
              <Image source={require('../assets/icon/go-food.png')} />
            </View>
            <Text style={styles.textMenu}>GO-FOOD</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Menu}>
        {/* Go-Send */}
        <TouchableOpacity>
          <View style={styles.MenuItems}>
            <View style={styles.iconMenu}>
              <Image source={require('../assets/icon/go-send.png')} />
            </View>
            <Text style={styles.textMenu}>GO-SEND</Text>
          </View>
        </TouchableOpacity>
        {/* Go-Deals */}
        <TouchableOpacity>
          <View style={styles.MenuItems}>
            <View style={styles.iconMenu}>
              <Image source={require('../assets/icon/go-deals.png')} />
            </View>
            <Text style={styles.textMenu}>GO-DEALS</Text>
          </View>
        </TouchableOpacity>
        {/* Go-Pulsa */}
        <TouchableOpacity>
          <View style={styles.MenuItems}>
            <View style={styles.iconMenu}>
              <Image source={require('../assets/icon/go-pulsa.png')} />
            </View>
            <Text style={styles.textMenu}>GO-PULSA</Text>
          </View>
        </TouchableOpacity>
        {/* More */}
        <TouchableOpacity>
          <View style={styles.MenuItems}>
            <View style={styles.iconMenu}>
              <Image source={require('../assets/icon/go-more.png')} />
            </View>
            <Text style={styles.textMenu}>MORE</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Menu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 12,
    marginTop: 10,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  MenuItems: {
    alignItems: 'center',
    width: 150,
  },
  iconMenu: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 22,
    borderColor: '#F1F1F1',
  },
  textMenu: {
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: '#F2F2F4',
    height: 20,
  },
});

export default Menu;
