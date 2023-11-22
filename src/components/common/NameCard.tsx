import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
  },
  taskNum: {
    fontSize: 16,
    fontWeight: '600',
    color: '#884EA0',
  },
});

interface NameCardProps {
  userName: string;
  noOfTasks: number;
}

const NameCard: FC<NameCardProps> = ({userName, noOfTasks}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        Hello, <Text style={styles.nameText}>{userName} </Text>!
      </Text>
      <Text style={styles.text}>
        You have <Text style={styles.taskNum}>{noOfTasks} new tasks </Text>
        reamining!
      </Text>
    </View>
  );
};

export default NameCard;
