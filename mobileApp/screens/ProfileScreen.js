import React from 'react';
import * as userApi from '../apis/User';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

class ProfileScreen extends React.Component {

  constructor (props) {
    super(props);
    this.user = this.getParam('user');
  };

  getParam(paramName) {
    const { getParam, dangerouslyGetParent } = this.props.navigation;
    let parent = dangerouslyGetParent();
    let val = getParam(paramName);
    while (val === undefined && parent && parent.getParam) {
      val = parent.getParam(paramName);
      parent = parent.dangerouslyGetParent();
    }
    return val;
  };

  render () {
    const username = this.user.username;
    const userId = this.user.userId;
    return (
      <View>
        <User name={username} userId={userId} />
        <TouchableOpacity 
          style={styles.signin}
          onPress={this.logOut.bind(this)}
        >
          <Text style={styles.buttonWords}> Log Out </Text>
        </TouchableOpacity>
      </View>
    );
  };

  logOut () {
    this.props.navigation.navigate('Login');
  };
};

ProfileScreen.navigationOptions = {
  title: 'My Profile',
};

class User extends React.Component {

  constructor (props) {
    super(props);
  };

  render () {
    self = this;
    return (
      <View>
        <Text style={styles.getStartedText}>
          Name: {self.props.name}
          UserId: {self.props.userId}
        </Text>
      </View>
    );
  };
}

export default ProfileScreen;

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
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
});
