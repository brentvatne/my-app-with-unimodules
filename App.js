import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ScrollView, View } from 'react-native';
import { Constants } from '@unimodules/react-native-platform';
import { Localization } from 'expo-localization';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Locale: {Localization.locale}</Text>
          <Text style={styles.welcome}>
            Fonts: {JSON.stringify(Constants)}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
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
});
