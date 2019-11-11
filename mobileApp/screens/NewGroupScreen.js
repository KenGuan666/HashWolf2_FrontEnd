import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import GroupHeader from '../components/allGroupScreen/GroupHeader';

class NewGroupScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return(
      <View style={{ flex:1, backgroundColor: '#fff' }}>  
        <GroupHeader username='James'> </GroupHeader>
        <Text> Create New Group </Text>
        <TextInput placeholder=' Group name'/>

        <View style={{ flexDirection: 'row', marginTop:300, }}> 
          <Image style={styles.imagestyle} source={require('../assets/images/james.png')}/>
        </View>

        <TextInput placeholder=' Search Friends'/>
        <View>
            <ScrollView>
              <Text> @keke </Text>
              <Text> @luxi </Text>
              <Text> @Pppp </Text>
              <Text> @aken123 </Text>
            </ScrollView>
        </View>
      </View>
    )
  }
}

NewGroupScreen.navigationOptions = {
  title: 'Make A New Group',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  imagestyle: {
    width:30,
    height:30,
    borderRadius: 30/2,
  },
});

export default NewGroupScreen; 
