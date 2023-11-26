import React from 'react';
import {StyleSheet} from 'react-native';
import NameCard from './common/NameCard';
import TodoList from './todos/TodoList';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
});

const Home = ({route}: {route: any}) => {
  const {userName} = route.params;

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
