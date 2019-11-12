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

class SignUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      signUpError: false,
    };
  };

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.header}>
          Please sign up with your email!
        </Text>

        <TextInput style={styles.username} placeholder="   Mobile number or email" onChangeText={text => this.setState({ email: text })}/>
        <TextInput style={styles.password} placeholder="   Nickname" onChangeText={text => this.setState({ username: text })}/>
        <TextInput style={styles.password} placeholder="   Enter your password" onChangeText={text => this.setState({ password: text })}/>

        {
          this.state.signUpError && <Text style={styles.signup}> Sign Up error, please try again! </Text>
        }
        <TouchableOpacity 
          style={styles.signin}
          onPress={this.create.bind(this)}
        >
          <Text style={styles.buttonWords}> Sign Up </Text>
        </TouchableOpacity> 

        <View style={{ flexDirection: 'row', marginTop: 300 }}>
        <Text style={styles.signup}> Already have an account? </Text>
        <TouchableOpacity onPress={this.signIn}>
        <Text style={{ fontSize:14, color: '#33B5C3' }}> Sign in </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  };

  create = () =>
    userApi.createNewUser(this.state.email, this.state.username)
      .then(data => {
        if (data) {
          return this.props.navigation.navigate('App', { user: data });
        }
        this.setState({ signUpError: true });
      });

  signIn = () => {
    this.props.navigation.navigate('SignIn');
  }

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

export default SignUpScreen;
