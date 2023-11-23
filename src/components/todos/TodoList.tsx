import React, {FC, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useGetTodosQuery} from '../../../app/api/todoApi';
import {storeTodos} from '../../../app/slices/todoSlice';
import TodoItem from './TodoItem';

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#E8D1EC',
    width: '92%',
    padding: 12,
    borderRadius: 15,
    margin: 10,
  },
});

const TodoList: FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const {data, isLoading} = useGetTodosQuery({page: currentPage, limit: 10});

  const todos = useSelector((state: any) => state.todos);

  useEffect(() => {
    if (data) {
      dispatch(storeTodos(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const fetchMoreData = () => {
    setCurrentPage(prev => prev + 1);
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

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
              image={item.image_url}
            />
          );
        }}
        onEndReached={fetchMoreData}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;
