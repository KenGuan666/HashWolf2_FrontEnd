import React from 'react';
import { View, Text, Image } from 'react-native';

const getEventDetailFromId = (id) => ({

});

class EventDetail extends React.Component {

  constructor(props) {
    super(props);
    this.id = props.id;
    this.user = props.user;
    this.data = getEventDetailFromId(this.id);
  };

  render() {
    return (
      <View style={viewStyle}>
        <Image style={imageStyle} source={require('../../assets/images/lucy.png')} />
        <Text style={textStyle}>
          Event {this.id}{"\n"}
          Sept 10{"\n"}
          $100 {"\n"}
          James, Ken{"\n"}
          "Price adjusted."{"\n"}
        </Text>
      </View>
    );
  };
}

const viewStyle = {
  width: '100%',
  height: '80%',
  backgroundColor: '#89cff0',
  justifyContent: 'flex-end',
  alignItems: 'center'
};
const textStyle = {
  textAlign: 'center',
  fontSize: 18,
};
const imageStyle = {
  width: 80,
  height: 80,
  alignItems: 'center',
};
export default EventDetail;
