import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import * as userApi from '../apis/User';
import {
  View,
  StyleSheet,
  Text, 
  TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      signInError: false,
    };
  };

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.header}>
          Aha
        </Text>

        <TextInput style={styles.username} placeholder="   Username" onChangeText={text => this.setState({ username: text })}/>
        <TextInput style={styles.password} placeholder="   Enter your password" onChangeText={text => this.setState({ password: text })}/>
        {
          this.state.signInError && <Text style={styles.forgotpassword}> Sign In error, please try again! </Text>
        }
        <Text style={styles.forgotpassword}> Forgot Password? </Text>

        <TouchableOpacity 
          style={styles.signin}
          onPress={this.signIn}
        >
          <Text style={styles.buttonWords}> Sign In </Text>
        </TouchableOpacity> 

        <View style={{ flexDirection: 'row', marginTop: 300 }}>
        <Text style={styles.signup}> Don't have an account? </Text>
        <TouchableOpacity onPress={this.signUp.bind(this)}>
        <Text style={{ fontSize:14, color: '#33B5C3' }}> Sign up </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  signIn = () => {
    userApi.login(this.state.username, this.state.password)
      .then(data => {
        if (data) {
          return this.props.navigation.navigate('App', { user: data });
        }
        this.setState({ signInError: true });
      })
  };

  signUp = () => {
    this.props.navigation.navigate('SignUp');
  };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#05587D',
  },
  header: {
    marginTop: 129,
    fontSize: 33,
    fontWeight: "bold",
    color: '#2e78b7',
    textAlign:'center',
    color: "#fff",
  },
  username: {
    marginTop: 36,
    height: 56,
    width: 263,
    borderRadius: 3,
    color: "black",
    borderColor: '#707070', 
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
  password: {
    marginTop:10,
    height: 56,
    width: 263,
    borderRadius: 3,
    color: "black",
    backgroundColor: 'white',
    borderColor: '#707070', 
    borderWidth: StyleSheet.hairlineWidth,
  },
  forgotpassword: {
    marginTop:24,
    marginRight:60,
    textAlign:'right',
    alignSelf:'flex-end',
    color:'#FFFFFF',
    fontSize:12,
  },
  signin: {
    marginTop: 24,
    alignItems:'center',
    backgroundColor: '#33B5C3',
    paddingVertical:20,
    paddingHorizontal:105,
    borderRadius:30,
  },
  buttonWords: {
    fontSize:14,
    fontWeight:'bold',
    color:'white',
  },
  signup: {
    // marginTop:300,
    fontSize:14,
    color:'#fff',
  },
});

export default LoginScreen;
