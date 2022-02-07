import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Gopay from '../../../component/Gopay';
import Menu from '../../../component/Menu';
import Navigation from '../../../component/Navigation';
import News from '../../../component/News';
import SearchBar from '../../../component/SearchBar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function Home({onPress}) {
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.content}>
          <SearchBar />
          <Gopay />
          <Menu />
          <News link="https://placeimg.com/816/315/tech" />
          {/* <News link="https://placeimg.com/800/345/tech" /> */}
        </View>
      </ScrollView>
      <Navigation onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
  },
});
