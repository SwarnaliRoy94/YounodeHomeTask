import React, {FC, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';
import {todoApi} from '../../../app/api/todoApi';
import {useDispatch, useSelector} from 'react-redux';
import {storeTodos} from '../../../app/slices/todoSlice';

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#E8D1EC',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },
});

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentaPage] = useState(0);
  const [getTodos, data, status] = todoApi.endpoints.getTodos.useLazyQuery();

  const todos = useSelector((state: any) => state.todos);

  useEffect(() => {
    getTodos({page: currentPage, limit: 5});
  }, [getTodos, currentPage]);

  useEffect(() => {
    if (data.currentData) {
      dispatch(storeTodos(data.currentData));
    }
  }, [data.currentData, dispatch]);

  console.log(todos);
  const fetchMoreData = () => {
    setCurrentaPage(prev => prev + 1);
  };

  return (
    <View style={styles.listView}>
      <FlatList
        data={todos}
        renderItem={({item}) => {
          return (
            <TodoItem
              id={item.id}
              title={item.title}
              body={item.body}
              image={item.image}
            />
          );
        }}
        onEndReached={fetchMoreData}
      />
    </View>
  );
};

export default TodoList;
