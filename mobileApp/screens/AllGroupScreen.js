import React from 'react';
import { View } from 'react-native';
import GroupHeader from '../components/allGroupScreen/GroupHeader';
import GroupList from '../components/allGroupScreen/GroupList';

const groupNames = ['Tahoe', 'Roomie', 'Friday Out'];

const mockGroups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
  groupId: i,
  groupName: groupNames[i % groupNames.length],
  groupDescription: i,
  users: [i],
}));

class AllGroupScreen extends React.Component {

  static navigationOptions = {
    header: null,
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
    return (
      <View style={container}>
        <GroupHeader username={this.getParam('user').username}> </GroupHeader>
        <GroupList groups={mockGroups} navigation={this.props.navigation}> </GroupList>
      </View>
    );
  };

  toSingleGroup = () => {
    this.props.navigation.navigate('SingleGroupScreen');
  };
};

const container = {
  flex: 1,
  backgroundColor: '#fff',
};

export default AllGroupScreen;
