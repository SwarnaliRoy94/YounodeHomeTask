import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NameCardProps} from '../../utils/types';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  text: {
    fontSize: 24,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#A504BF',
  },
  taskNum: {
    fontSize: 18,
    color: '#884EA0',
  },
});

const NameCard: FC<NameCardProps> = ({userName}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        Hello, <Text style={styles.nameText}>{userName}</Text>!
      </Text>
    </View>
  );
};

export default NameCard;
