import React from 'react';
import { View, Text } from 'react-native';

class GroupEntry extends React.Component {

    constructor(props) {
        super(props);
        this.groupName = props.groupName;
        this.groupDescription = props.groupDescription;
        this.users = props.users;
    }

    render () {
        return (
            <View style={button}>
                <Text style={textStyle}>
                    Group Name: {this.groupName}
                    Group Description: {this.groupDescription}
                    Users: {this.users}
                </Text>
            </View>
        )
    }
}

const button = {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffefd5',
    alignItems: 'center',
};

const textStyle = {
    textAlign: 'center',
    fontSize: 18,
}

export default GroupEntry;
