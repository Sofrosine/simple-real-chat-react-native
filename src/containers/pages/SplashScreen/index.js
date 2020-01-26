import React, {Component} from 'react'
import { View, Image } from 'react-native'
import SplashScreens from '../../../assets/images/REAL_CHAT.png'

export default class SplashScreen extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Loading')
    }, 2000);
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Image source={SplashScreens} style={{height:'100%', width:'100%'}}/>
      </View>
    )
  }
}