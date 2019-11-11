import React from 'react';
import { View, Text, Image } from 'react-native';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.username = props.username;
    this.balance = props.balance;
    this.groupName = props.groupName;
  };

  render() {
    return (
      <View style={viewStyle}>
        <Image
          style={imageStyle}
          source={require('../../assets/images/tahoe.png')}
        />
        <Text style={textStyle}>
          Hi, {this.username}!
                </Text>
        <Text style={textStyle}>
          Your balance in {this.groupName} is {this.balance}
        </Text>
      </View>
    );
  };
}

const viewStyle = {
  width: '100%',
  height: '25%',
  backgroundColor: '#89cff0',
  justifyContent: 'flex-end',
  alignItems: 'center'
};
const imageStyle = {
  width: 80,
  height: 80,
};
const textStyle = {
  fontSize: 17,
};

export default Header;
