import React from 'react';
import * as userApi from '../apis/User';
import {
  Text,
  StyleSheet,
} from 'react-native';

class ProfileScreen extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      users: [0],
    };
  };

  componentDidMount () {
    userApi.allUsers()
      .then(users => {
        if (users.length > 0) {
          this.setState({ users: users });
        }
      });
  }

  render () {
    self = this
    return (
      <User name={self.state.users[0].name} email={self.state.users[0].email} />
    );
  }
}

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
      <Text style={styles.getStartedText}>
        Name: {self.props.name}
        Email: {self.props.email}
      </Text>
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
  }
});
