import React from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  AsyncStorage,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

import Loading from '../containers/pages/Loading';
import SignUp from '../containers/pages/auth/SignUp';
import Login from '../containers/pages/auth/Login';
import EditProfile from '../containers/pages/profile/EditProfile';
import Profile from '../containers/pages/profile/Profile';
import SelfProfile from '../containers/pages/profile/SelfProfile';
import Map from '../containers/pages/main/maps';
import Chat from '../containers/pages/main/chat';
import ChatList from '../containers/pages/main/ChatList';
import SplashScreen from '../containers/pages/SplashScreen';

// import the different screens

const EditProfileStack = createStackNavigator(
  {
    EditProfile,
  },
  {
    initialRouteName: 'EditProfile',
    headerMode: 'none',
  },
);

const SelfProfileStack = createStackNavigator(
  {
    SelfProfile,
  },
  {
    initialRouteName: 'SelfProfile',
    headerMode: 'none',
  },
);

const MapStack = createStackNavigator(
  {
    Map: {
      screen: Map,
    },
    Profile: {
      screen: Profile,
    },
    Chat: {
      screen: Chat,
    },
  },
  {
    initialRouteName: 'Map',
    headerMode: 'none',
  },
);

const ChatStack = createStackNavigator(
  {
    Chat: {
      screen: Chat,
    },
    ChatList: {
      screen: ChatList,
    },
  },
  {
    initialRouteName: 'ChatList',
    headerMode: 'none',
  },
);

const RouterBottom = createMaterialBottomTabNavigator(
  {
    Profile: {
      screen: SelfProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name="home" />
          </View>
        ),
      },
    },
    Map: {
      screen: MapStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon5
              style={[{color: tintColor}]}
              size={25}
              name="map-marked-alt"
            />
          </View>
        ),
      },
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name="comments" />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Profile',
    inactiveColor: '#FAF8F0',
    activeColor: '#F49FB6',
    barStyle: {backgroundColor: 'pink'},
  },
);

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    EditProfile: {
      screen: EditProfile,
    },
    Loading: {
      screen: Loading,
    },
    SignUp: {
      screen: SignUp,
    },
    Login: {
      screen: Login,
    },
    RouterBottom: {
      screen: RouterBottom,
    },
    SplashScreen: {
      screen: SplashScreen,
    },
    // Profile: {
    //   screen: Profile
    // },
    // SelfProfile: {
    //   screen: SelfProfile
    // }
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

//
export default createAppContainer(App);