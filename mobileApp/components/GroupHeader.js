import React from 'react';
import { View, Text } from 'react-native';

class GroupHeader extends React.Component {

    constructor(props) {
        super(props);
        this.username = props.username;
    }

    render () {
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>
                    Hi, {this.username}!
                </Text>
                <Text style={{textAlign: 'center'}}>
                    The amount you owe and are owed are displayed here.
                </Text>
            </View>
        )
    }
}

const viewStyle = {
    width: '100%',
    height: '12%',
    backgroundColor: '#89cff0',
};

const textStyle = {
    textAlign: 'center',
    fontSize: 22,
}

export default GroupHeader;
