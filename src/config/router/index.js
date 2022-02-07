import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, Button, View} from 'react-native';
import Home from '../../containers/pages/Home';
import Navigation from '../../component/Navigation';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return <Home onPress={() => navigation.navigate('Order')} />;
}

function Order({navigation}, {onPress}) {
  return (
    <View>
      <Text>Order Screen</Text>
      <Button
        title="Go to Order... again"
        onPress={() => navigation.push('Order')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Navigation onPress={onPress} />
    </View>
  );
}

function Router(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My Home Page', headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{title: 'My Home Page', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
