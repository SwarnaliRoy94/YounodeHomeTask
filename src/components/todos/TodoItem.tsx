import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TodoProps} from '../../utils/types';

const styles = StyleSheet.create({
  todos: {
    backgroundColor: '#ECE3ED',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  imageView: {
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  checkboxView: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    color: '#884EA0',
    fontSize: 14,
  },
});

const TodoItem: FC<TodoProps> = ({title, body, image}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const navigation: any = useNavigation();
  const onPressTodo = () => {
    navigation.navigate('TodoDescription');
  };

  return (
    <TouchableOpacity
      style={styles.todos}
      onPress={() => {
        onPressTodo();
      }}>
      <View style={styles.checkboxView}>
        <CheckBox
          value={isSelected}
          onValueChange={setIsSelected}
          tintColor="#D2B4DE"
          onTintColor="#A504BF"
          onCheckColor="#A504BF"
          onAnimationType="bounce"
          offAnimationType="stroke"
        />
      </View>
      <View style={styles.imageView}>
        <Text>{image}</Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
