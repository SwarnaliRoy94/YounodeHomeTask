import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NameCard from './common/NameCard';
import TodoList from './todos/TodoList';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ECE3ED',
    paddingVertical: 20,
    alignItems: 'center',
  },
});

const Home: FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <NameCard userName="Swarnali" noOfTasks={3} />
      <TodoList />
    </ScrollView>
  );
};

export default Home;
