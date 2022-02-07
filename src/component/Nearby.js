import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default function Nearby() {
  return (
    <View style={{borderBottomColor: '#F2F2F4', borderBottomWidth: 2, paddingBottom: 50}}>
      <View style={styles.gofoodIcon}>
        <Image
          source={require('../assets/logo/go-food.png')}
          style={styles.gofood}
        />
      </View>
      <View style={styles.headerFood}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          Try This Restaurant
        </Text>
        <Text style={{color: 'green', fontWeight: 'bold', fontSize: 20}}>See All</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal>
          <View style={styles.foodParent}>
            <View style={styles.foodWrapper}>
              <Image
                source={require('../assets/dummy/go-food-banka.jpg')}
                style={styles.foodImage}
              />
            </View>
            <Text style={styles.foodTitle}>Martabak</Text>
          </View>
          <View style={styles.foodParent}>
            <View style={styles.foodWrapper}>
              <Image
                source={require('../assets/dummy/go-food-gm.jpg')}
                style={styles.foodImage}
              />
            </View>
            <Text style={styles.foodTitle}>Bakmi Ayam</Text>
          </View>
          <View style={styles.foodParent}>
            <View style={styles.foodWrapper}>
              <Image
                source={require('../assets/dummy/go-food-kfc.jpg')}
                style={styles.foodImage}
              />
            </View>
            <Text style={styles.foodTitle}>Ayam Goreng</Text>
          </View>
          <View style={styles.foodParent}>
            <View style={styles.foodWrapper}>
              <Image
                source={require('../assets/dummy/go-food-orins.jpg')}
                style={styles.foodImage}
              />
            </View>
            <Text style={styles.foodTitle}>Orins</Text>
          </View>
          <View style={styles.foodParent}>
            <View style={styles.foodWrapper}>
              <Image
                source={require('../assets/dummy/go-food-pak-boss.jpg')}
                style={styles.foodImage}
              />
            </View>
            <Text style={styles.foodTitle}>Ayam Geprek</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gofood: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  gofoodIcon: {
    marginHorizontal: 20,
    height: 100,
    width: 100,
  },
  headerFood: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: -20,
  },
  foodWrapper: {
    width: 170,
    height: 170,
    marginHorizontal: 20,
  },
  foodImage: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
  },
  foodTitle: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  foodParent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
