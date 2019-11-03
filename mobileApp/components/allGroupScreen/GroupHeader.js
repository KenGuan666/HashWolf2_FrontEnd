import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';

class GroupHeader extends React.Component {

    constructor(props) {
        super(props);
        this.username = props.username;
    };

    render () {
        return (
            <View style={viewStyle}>
                <View style={{flexDirection:'row', alignItems: 'flex_start', marginTop:100,}}>
                    <View style={{marginLeft:0,}}>
                        <Image style={styles.imagestyle} source={require('../../assets/images/james.png')}/>
                    </View>
                    <View style={{margintop:40, marginLeft: 100,}}>
                        <Text style={{color:'black', fontSize:16, paddingBottom: 15,}}> @James-666 </Text>
                        <Text> You owe $300 {'\n'} You are owed $100 </Text>
                    </View>
                </View>
                
                <Text style={textStyle}>
                    Hi, {this.username}!
                </Text>
                <Text style={textStyle}>
                    The amount you owe and are owed are displayed here.
                </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    imagestyle: {
        width:80,
        height:80,
    }
})

const viewStyle = {
    width: '100%',
    height: '30%',
    backgroundColor: '#89cff0',
    justifyContent: 'flex-start', 
    alignItems: 'center'
};

const textStyle = {
    fontSize: 17,
};

export default GroupHeader;
