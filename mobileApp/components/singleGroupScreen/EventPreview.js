import React from 'react';
import { View, Text } from 'react-native';

const UTCtoReadable = (time) => {
    [hour, min] = time.split('T')[1].split(':').slice(0, 2);
    return `${hour}:${min}`;
} 

class EventPreview extends React.Component {

    constructor(props) {
        super(props);
        this.user = props.user;
        this.name = props.name;
        this.time = UTCtoReadable(props.time);
        this.location = props.location;
        this.payment = props.payment;
        this.users = props.users;
        this.author = props.author;
    }

    render () {
        participants = this.users.filter((value) => value != this.author).join(', ');
        return (
            <View style={button}>
                <Text style={textStyle}>
                    {this.name} initiated by {this.author === this.user ? 'you' : this.author} at {this.time}, {this.location} with {participants}. 
                    You paid {this.payment}
                </Text>
            </View>
        )
    }
}

const button = {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffefef',
    alignItems: 'center',
};

const textStyle = {
    textAlign: 'center',
    fontSize: 18,
}

export default EventPreview;
