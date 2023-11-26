import auth from '@react-native-firebase/auth';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NameCard from './common/NameCard';
import TodoList from './todos/TodoList';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: 'purple',
  },
  buttonView: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
});

const Home = () => {
  const userName = auth().currentUser?.displayName ?? 'Anonymous User';
  const image = require('../assets/logout.jpeg');
  const handleSignout = () => {
    auth().signOut();
  };
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#ECE3ED', '#FAE5D3', '#ECE3ED']}>
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={handleSignout}>
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <NameCard userName={userName} />
        <TodoList />
      </View>
    </LinearGradient>
  );
};

export default Home;
