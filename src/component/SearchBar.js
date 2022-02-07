import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.Top}>
      <View style={styles.Search}>
        <TextInput
          placeholder="Find food, places, or services"
          style={styles.SearchBar}
        />
        <Image
          source={require('../assets/icon/search.png')}
          style={styles.searchIcon}
        />
      </View>
      <View>
        <Image
          source={require('../assets/icon/promo.png')}
          style={styles.iconPromo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBar: {
    marginHorizontal: 12,
    paddingLeft: 40,
    paddingRight: 20,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'white',
    borderColor: '#EAEAEA',
  },
  searchIcon: {
    position: 'absolute',
    top: 12,
    left: 20,
  },
  Search: {
    position: 'relative',
    marginTop: 10,
    flex: 1,
  },
  Top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconPromo: {
    width: 34,
    height: 34,
  },
});

export default SearchBar;
