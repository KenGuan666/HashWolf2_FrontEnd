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
                <Text style={textStyle}>
                    The amount you owe and are owed are displayed here.
                </Text>
            </View>
        )
    }
}

const viewStyle = {
    width: '100%',
    height: '20%',
    backgroundColor: '#89cff0',
    justifyContent: 'flex-end', 
    alignItems: 'center'
};

const textStyle = {
    fontSize: 17,
}

export default GroupHeader;
