import auth from '@react-native-firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import TodoDescription from '../components/todos/TodoDescription';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      {auth().currentUser?.displayName ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="TodoDescription"
            component={TodoDescription}
            options={{
              headerBackTitleVisible: false,
              headerTitle: 'Todo Details',
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Root;
