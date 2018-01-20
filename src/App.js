import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import InputArticle from './screens/input_article';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <InputArticle />
      </View>
    );
  }
}
