import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import GroupHeader from '../components/singleGroupScreen/Header';
import EventDialogue from '../components/singleGroupScreen/EventDialogue';

const getGroupById = (id) => ({
  groupName: `Group ${id}`,
  groupDescription: id,
  userBalance: {
    ken: id,
    sprite: -id,
  },
  events: [
    id * 10 + 1,
    id * 10 + 2,
  ]
});

const user = 'ken';

class SingleGroupScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super(props);
    this.groupId = JSON.stringify(this.props.navigation.getParam('groupId', 'Not Found'));
    this.data = getGroupById(this.groupId);
  }

  render () {
    return (
      <View style={styles.container}>
        <GroupHeader username={user} balance={this.data.userBalance[user]} groupName={this.data.groupName}></GroupHeader>
        <EventDialogue user={user} eventIds={this.data.events}> </EventDialogue>
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
