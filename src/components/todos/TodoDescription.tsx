import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  container: {
    padding: 20,
  },
  topView: {
    marginBottom: 10,
    alignItems: 'center',
  },
  bottomView: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  imageView: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 3,
    borderColor: '#000',
    width: 205,
    height: 305,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#884EA0',
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'justify',
  },
  tinyLogo: {
    width: 200,
    height: 300,
  },
});

const TodoDescription = ({route}: {route: any}) => {
  const {title, body, image} = route.params;
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#D2B4DE', '#ECE3ED', '#FAE5D3', '#ECE3ED', '#D2B4DE']}
      style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.imageView}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: image,
              }}
            />
          </View>
          <Text style={styles.bodyText}>{body}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default TodoDescription;
