
import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text, 
  TextInput,
} from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.header}>
          Welcome to Aha!
        </Text>

        <TextInput style={styles.username} placeholder="username"/>
        <TextInput style={styles.password} placeholder="password"/>

        <Button title="Sign in Here" onPress={this.signIn} />
      </View>
    );
  }

  signIn = () => {
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize: 40,
    color: '#2e78b7',
    textAlign:'center',
  },
  username:{
    height: 40,
    autoFocus:true, 
    width: 200,
    borderColor: 'gray', 
    borderWidth: 2,
  },
  password:{
    height: 40,
    width: 200,
    borderColor: 'gray', 
    borderWidth: 2,    
  },
});

export default LoginScreen;
