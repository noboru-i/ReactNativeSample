import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput
} from 'react-native';

export default class InputArticle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text style={styles.welcome}>Sample App</Text>
        <TextInput
          style={{ height: 40, margin: 10 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    margin: 10
  }
});
