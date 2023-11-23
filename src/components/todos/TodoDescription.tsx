import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TodoProps} from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    padding: 20,
  },
  topView: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  bottomView: {
    backgroundColor: '#E8D1EC',
    padding: 20,
    borderRadius: 10,
  },
  imageView: {
    marginRight: 15,
  },
  titleText: {
    fontSize: 20,
    color: '#884EA0',
  },
});
const TodoDescription: FC<TodoProps> = ({title, body, image}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#FAE5D3', '#ECE3ED']}
      style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.titleText}>{title}title</Text>
          <View style={styles.imageView}>
            <Text>{image}image</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text>{body}body</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default TodoDescription;
