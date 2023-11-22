import React, {FC, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ECE3ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetView: {
    alignItems: 'center',
    marginBottom: 30,
  },
  greetText1: {
    fontSize: 50,
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
    fontWeight: 'bold',
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
    marginTop: 30,
  },
  button: {
    width: '90%',
    backgroundColor: '#EBDEF0',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
  socialLoginView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  googleButton: {
    width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
});

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#ECE3ED', '#FDF2E9', '#ECE3ED']}
      style={styles.wrapper}>
      <View style={styles.greetView}>
        <Text style={styles.greetText1}>Welcome!</Text>
        <Text style={styles.greetText2}>Glad to see you!!</Text>
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
        </View>
        <View style={styles.forgetView}>
          <Text>Forget your password?</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text1}>Login</Text>
            {/* <Icon name="login" /> */}
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Or Login with</Text>
      </View>
      <View style={styles.socialLoginView}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.text1}>Google</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>
            Dont have an account? <Text style={styles.text2}>Sign Up Now</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Login;
