import React from 'react';
import { Text } from 'react-native';

const getEventDetailFromId = (id) => ({

});

class EventDetail extends React.Component {

    constructor (props) {
        super(props);
        this.id = props.id;
        this.user = props.user;
        this.data = getEventDetailFromId(this.id);
    }

    render () {
        return (
            <Text>Hello from Overlay {this.id} !</Text>
        )
    };
}

export default EventDetail;
