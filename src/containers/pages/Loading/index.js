// Loading.js
import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import firebase from 'firebase'


// const config = {
//   apiKey: 'AIzaSyBzBlZq9Noff4tXQo9i3exmPo8SnYZ6x-o',
//   authDomain: 'realchat2.firebaseapp.com',
//   databaseURL: 'https://realchat2.firebaseio.com',
//   projectId: 'realchat2',
//   storageBucket: 'realchat2.appspot.com',
//   messagingSenderId: '280883155759',
//   appId: '1:280883155759:web:7fd94042afe4f7883147da',
//   measurementId: 'G-387M9DJNPV',
// };
// firebase.initializeApp(config);

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'SelfProfile' : 'SignUp');
      console.log('sss', user);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="pink" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF8F0',
  },
});
