
import React from 'react';
import {
  Button,
  View,
  StyleSheet,
} from 'react-native';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this.signIn} />
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
});

export default LoginScreen;
