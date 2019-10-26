import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import EventPreview from './EventPreview';

const author = 'ken';

const getEventsFromIds = (ids) => {
    return ids.map(id => ({
        id,
        name: `Event ${id}`,
        time: '2019-10-26T22:14:35Z',
        location: 'Cal Hacks 6.0',
        paymentInfo: {
            ken: id,
        },
        users: ['ken', 'sprite'],
        author,
    }));
}

class EventDialogue extends React.Component {

    constructor (props) {
        super(props);
        this.user = props.user;
        this.eventIds = props.eventIds;
        this.eventsData = getEventsFromIds(this.eventIds);
    }

    render () {
        return (
            <ScrollView style={background}>
                {
                    this.eventsData.map(event => 
                        <EventPreviewContainer
                            user={this.user}
                            key={event.id}
                            name={event.name}
                            time={event.time}
                            location={event.location}
                            payment={event.paymentInfo}
                            users={event.users}
                            author={event.author}
                        ></EventPreviewContainer>
                    )
                }
            </ScrollView>
        )
    }
}

class EventPreviewContainer extends React.Component {

    constructor (props) {
        super(props);
        this.user = props.user;
        this.name = props.name;
        this.time = props.time;
        this.location = props.location;
        this.payment = props.payment;
        this.users = props.users;
        this.author = props.author;
    }

    render () {
        return (
            <View style={container}>
                <TouchableOpacity>
                    <EventPreview
                        user={this.user}
                        name={this.name}
                        time={this.time}
                        location={this.location}
                        payment={this.payment[this.user] ? this.payment[this.user] : 0}
                        users={this.users}
                        author={this.author}
                    ></EventPreview>
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
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 8,
}

export default EventDialogue;
