/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import {
//   ViroScene,
//   ViroText,
//   Viro360Image,
// } from 'react-viro';
// import {
//   ViroARScene,
//   ViroText,
//   ViroMaterials,
//   ViroBox,
//   Viro3DObject,
//   ViroAmbientLight,
//   ViroSpotLight,
//   ViroARPlaneSelector,
//   ViroNode,
//   ViroAnimations,
// } from 'react-viro';
import {
  ViroARSceneNavigator
} from 'react-viro';

/*
 TODO: Insert your API key below
 */
var sharedProps = {
  apiKey:"25A3343F-BC67-455B-8154-3A30A22297FF",
}

var InitialARScene = require('./HelloWorldSceneAR');

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      sharedProps : sharedProps
    }
    // this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    // this._getVRNavigator = this._getVRNavigator.bind(this);
    // this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(this);
    // this._exitViro = this._exitViro.bind(this);
  }

  render() {
      return this._getARNavigator();
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getARNavigator() {
    return (
      <ViroARSceneNavigator {...this.state.sharedProps}
        initialScene={{scene: InitialARScene}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
