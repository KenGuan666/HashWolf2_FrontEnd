import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import GroupEntry from './GroupEntry';

class GroupList extends React.Component {

    constructor (props) {
        super(props);
        this.groups = props.groups;
        this.navigator = props.navigator;
    }

    render () {
        return (
            <ScrollView style={background}>
                {
                    this.groups.map(group => 
                        <GroupEntryContainer
                            key={group.groupName}
                            groupName={group.groupName}
                            groupDescription={group.groupDescription}
                            users={group.users}
                            navigator={this.navigator}
                        ></GroupEntryContainer>
                    )
                }
            </ScrollView>
        )
    }
}

class GroupEntryContainer extends React.Component {

    constructor (props) {
        super(props);
        this.groupName = props.groupName;
        this.groupDescription = props.groupDescription;
        this.users = props.users;
        this.navigator = props.navigator;
    }

    render () {
        return (
            <View style={container}>
                <TouchableOpacity onPress={this.navigator}>
                    <GroupEntry
                        groupName={this.groupName}
                        groupDescription={this.groupDescription}
                        users={this.users}
                    ></GroupEntry>
                </TouchableOpacity>
            </View>
        )
    }
}

const background = {
    flex: 1,
    backgroundColor: '#fff',
}

const container = {
    height: 80,
    marginBottom: 6,
}

export default GroupList;
