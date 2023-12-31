import auth from '@react-native-firebase/auth';
import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NameCard from './common/NameCard';
import TodoList from './todos/TodoList';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
  },
});

const Home = () => {
  const userName = auth().currentUser?.displayName ?? 'Anonymous User';

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#ECE3ED', '#FAE5D3', '#ECE3ED']}
      style={styles.wrapper}>
      <NameCard userName={userName} />
      <TodoList />
    </LinearGradient>
  );
};

export default Home;
