import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/todos/Home';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Root;
