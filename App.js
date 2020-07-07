/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNTesterApp from './js/RNTesterApp';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <RNTesterApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
