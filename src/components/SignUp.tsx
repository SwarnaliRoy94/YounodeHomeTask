import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
    fontSize: 28,
    // fontWeight: '600',
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
    fontWeight: 'bold',
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigation: any = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#ECE3ED', '#FDF2E9', '#ECE3ED']}
      style={styles.wrapper}>
      <View style={styles.greetView}>
        <Text style={styles.greetText1}>Create Account</Text>
        <Text style={styles.greetText1}>to get started now!</Text>
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
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>Or Sign Up with</Text>
      </View>
      <View style={styles.socialLoginView}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.text1}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text2}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SignUp;
