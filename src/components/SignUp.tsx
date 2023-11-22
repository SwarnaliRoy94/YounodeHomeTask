import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ECE3ED',
    alignItems: 'center',
  },
  greetView: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 30,
  },
  greetText1: {
    fontSize: 32,
    fontWeight: '600',
    color: '#884EA0',
  },
  greetText2: {
    fontSize: 18,
    color: '#884EA0',
  },
  loginView: {
    width: '100%',
    padding: 20,
  },
  inputView: {
    padding: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#884EA0',
  },
  text: {
    fontSize: 15,
  },
  text1: {
    fontSize: 18,
  },
  text2: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#884EA0',
  },
  forgetView: {
    alignItems: 'flex-end',
    marginTop: -20,
    marginRight: 16,
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 20,
  },
  button: {
    width: '50%',
    backgroundColor: '#F5CBA7',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
});

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.greetView}>
        <Text style={styles.greetText1}>Create New Account!!</Text>
      </View>
      <View style={styles.loginView}>
        <View style={styles.inputView}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your mail address"
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Enter your password"
            secureTextEntry
          />
          <Text style={styles.text}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text1}>Sign Up</Text>
            {/* <Icon name="login" /> */}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Or</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.text2}>Go Back to Login Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
