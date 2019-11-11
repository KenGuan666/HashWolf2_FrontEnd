import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import Header from '../components/singleGroupScreen/Header';
import EventDialogue from '../components/singleGroupScreen/EventDialogue';

const groupNames = ['Tahoe', 'Roomie', 'Friday Out'];

const getGroupById = (id) => ({
  groupName: groupNames[id % groupNames.length],
  groupDescription: id,
  userBalance: {
    ken: id,
    sprite: -id,
  },
  events: [
    id * 10 + 1,
    id * 10 + 2,
  ],
});

class SingleGroupScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super(props);
    this.groupId = JSON.stringify(this.props.navigation.getParam('groupId', 'Not Found'));
    this.data = getGroupById(this.groupId);
    this.user = this.getParam('user');
  }

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
    return (
      <View style={styles.container}>
        <Header username={username} balance={this.data.userBalance[username]} groupName={this.data.groupName}></Header>
        <EventDialogue user={username} eventIds={this.data.events}> </EventDialogue>
      </View>
    );
  };

  toAllGroups = () => {
    this.props.navigation.navigate('AllGroupScreen');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SingleGroupScreen;

