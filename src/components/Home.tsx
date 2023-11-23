import React, {FC} from 'react';
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

const Home: FC = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#ECE3ED', '#FAE5D3', '#ECE3ED']}
      style={styles.wrapper}>
      <NameCard userName="Swarnali" noOfTasks={3} />
      <TodoList />
    </LinearGradient>
  );
};

export default Home;
