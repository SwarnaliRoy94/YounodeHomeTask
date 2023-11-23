import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NameCardProps} from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#A504BF',
  },
  taskNum: {
    fontSize: 16,
    color: '#884EA0',
  },
});

const NameCard: FC<NameCardProps> = ({userName}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        Hello, <Text style={styles.nameText}>{userName}</Text>!
      </Text>
      <Text style={styles.taskNum}>You have some new tasks to finish!! </Text>
    </View>
  );
};

export default NameCard;
