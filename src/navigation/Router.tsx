import auth from '@react-native-firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import TodoDescription from '../components/todos/TodoDescription';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'purple',
    marginRight: 20,
  },
});

const Stack = createStackNavigator();

const Root = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      // Check if the user is logged in
      if (!user) {
        setIsSignedIn(false);
      } else {
        setIsSignedIn(true);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log(isSignedIn);
  }, [isSignedIn]);

  const image = require('../assets/logout.jpeg');
  const handleSignout = () => {
    auth().signOut();
  };
  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => (
                <TouchableOpacity onPress={handleSignout}>
                  <Image source={image} style={styles.image} />
                </TouchableOpacity>
              ),
            }}
          />
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
