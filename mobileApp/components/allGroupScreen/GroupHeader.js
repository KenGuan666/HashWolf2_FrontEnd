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
                <View style={styles.headerStyle}>
                    <View style={{marginLeft:-20}}>
                        <Image style={styles.imagestyle} source={require('../../assets/images/james.png')}/>
                    </View>
                    <View style={{marginLeft: 20,}}>
                        <Text style={styles.nameText}> @James-666 </Text>
                        <Text style={styles.oweText}> You owe $300 {'\n'} You are owed $100 </Text>
                    </View>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection:'row', 
        alignItems: 'flex-start', 
        marginTop:90,
        backgroundColor: '#DFE8ED',
    },
    imagestyle: {
        width:100,
        height:100,
        borderRadius: 100/2,
    },
    nameText: {
        color:'#00597D', 
        fontSize:22, 
        fontWeight: "bold",
        paddingBottom: 10,
        paddingTop: 20,
    },
    oweText: {
        color: '#859EAC',
        fontSize: 12,
    },
})

const viewStyle = {
    width: '100%',
    height: '30%',
    backgroundColor: '#DFE8ED',
    justifyContent: 'flex-start', 
    alignItems: 'center',
};

const textStyle = {
    fontSize: 17,
};

export default GroupHeader;
