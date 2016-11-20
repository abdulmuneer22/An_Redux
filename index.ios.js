import React, {Component} from 'react'
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

import reducers from './APP/Reducers'

import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'
import RouteManager from './APP/Containers/RouteManager'

export default class ReduxExample extends Component {
  render() {
    
    return (
      <Provider store={createStore(reducers)}>
        <RouteManager/>
      </Provider>
    );
  }
}



AppRegistry.registerComponent('ReduxExample', () => ReduxExample);
