import React from 'react';
import { View } from 'react-native';
import GroupHeader from '../components/allGroupScreen/GroupHeader';
import GroupList from '../components/allGroupScreen/GroupList';

const mockGroups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
  groupId: i,
  groupName: i,
  groupDescription: i,
  users: [i],
}));

class AllGroupScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };
 
  render () {
    return (
      <View style={container}>
        <GroupHeader username='ken'> </GroupHeader>
        <GroupList groups={mockGroups} navigation={this.props.navigation}> </GroupList>
      </View>
    );
  };

  toSingleGroup = () => {
    this.props.navigation.navigate('SingleGroupScreen');
  };
}

const container = {
  flex: 1,
  backgroundColor: '#fff',
};

export default AllGroupScreen;
