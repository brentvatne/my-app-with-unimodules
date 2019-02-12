import React, { Component } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { Constants } from '@unimodules/react-native-platform';
import { Localization } from 'expo-localization';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as Font from 'expo-font';

export default class App extends Component {
  state = {
    ready: false,
  };

  async componentDidMount() {
    try {
      // Load font
      await Font.loadAsync({ barcode: require('./barcode.ttf') });
      // Cache image locally
      await Asset.fromModule(require('./image.jpg')).downloadAsync();
    } catch (e) {
      alert(e.message);
    } finally {
      this.setState({ ready: true });
    }
  }

  render() {
    if (!this.state.ready) {
      return <View />;
    }

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text
            style={[
              styles.welcome,
              /* Temporarily use processFontFamily because expo-font scopes fontFamily names */
              { fontFamily: Font.processFontFamily('barcode') },
            ]}>
            Locale: {Localization.locale}
          </Text>
          { /* This one will load from local cache on phone */ }
          <Image
            source={require('./image.jpg')}
            style={{ width: 200, height: 200 }}
          />
          { /* These ones will load over http every time */ }
          <Image source={require('./icons/icon.png')} />
          <Image
            source={{
              uri:
                'https://d30j33t1r58ioz.cloudfront.net/static/brand/logo-b-black-512x512.png',
            }}
            style={{ width: 200, height: 200 }}
          />
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
