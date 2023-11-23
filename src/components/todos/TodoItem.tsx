import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TodoProps} from '../../utils/types';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  todos: {
    backgroundColor: '#ECE3ED',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    marginLeft: 16,
    width: '100%',
  },
  imageView: {
    justifyContent: 'center',
    marginRight: 15,
  },
  checkboxView: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    paddingTop: 8,
    color: '#884EA0',
    fontSize: 14,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const TodoItem: FC<TodoProps> = ({title, body, image}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const navigation: any = useNavigation();
  const onPressTodo = () => {
    navigation.navigate('TodoDescription');
  };

  const truncate = (str: string, length: number) => {
    return str.slice(0, length) + '...';
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity
        style={styles.todos}
        onPress={() => {
          onPressTodo();
        }}>
        <View style={styles.imageView}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: image,
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{truncate(body, 30)}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
