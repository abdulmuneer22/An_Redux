import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Navigator
} from 'react-native';

import Login from './Login'
import Main from './Main'


class RouteManager extends Component{
    
    renderScene(route,navigator){
    
    if(route.name == 'login'){
    return <Login  navigator={navigator} />
    }

    if(route.name == 'mainscreen'){
    return <Main  navigator={navigator} />
    }



    }


    configureScene(route){
    return Navigator.SceneConfigs.FloatFromRight
    }

    render(){
    return(
      <Navigator
      initialRoute={{name: 'login'}}
      renderScene={this.renderScene.bind(this)}
      configureScene={this.configureScene.bind(this)}
      />
    );
  }



}


export default RouteManager