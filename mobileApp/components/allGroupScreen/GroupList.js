import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import GroupEntry from './GroupEntry';

class GroupList extends React.Component {

  constructor(props) {
    super(props);
    this.groups = props.groups;
  };

  render() {
    return (
      <ScrollView style={background}>
        {
          this.groups.map(group =>
            <GroupEntryContainer
              key={group.groupId}
              groupId={group.groupId}
              groupName={group.groupName}
              groupDescription={group.groupDescription}
              users={group.users}
              navigation={this.props.navigation}
            ></GroupEntryContainer>
          )
        }
      </ScrollView>
    );
  };
}

class GroupEntryContainer extends React.Component {

  constructor(props) {
    super(props);
    this.groupId = props.groupId;
    this.groupName = props.groupName;
    this.groupDescription = props.groupDescription;
    this.users = props.users;
  };

  render() {
    return (
      <View style={container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SingleGroupScreen', { groupId: this.groupId })}>
          <GroupEntry
            groupName={this.groupName}
            groupDescription={this.groupDescription}
            users={this.users}
          ></GroupEntry>
        </TouchableOpacity>
      </View>
    );
  };
}

const background = {
  flex: 1,
  backgroundColor: '#fff',
};

const container = {
  height: 80,
  marginBottom: 6,
};

export default GroupList;
