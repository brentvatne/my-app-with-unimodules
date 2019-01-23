/**
 * Simple React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Localization } from 'expo-localization';
import * as Font from 'expo-font';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{Localization.locale}</Text>
        <Text style={styles.quote}>Because of your smile, you make life more beautiful.</Text>
      </View>
    );
  }

  async componentWillMount() {
    try {
      await this.loadFonts();
      console.log("font load successful");
    } catch(e) {
      console.log("Failed to load the font", e);
    }
  }

  async loadFonts() {
    await Font.loadAsync({
        //Typography
        IndieFlower: require("./assets/fonts/IndieFlower.ttf"),
    })
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  quote:{
    fontSize: 16,
    fontFamily: "IndieFlower",
    margin: 10
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
});
