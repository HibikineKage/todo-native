import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Todo from './app/todo';
import initStore from './app/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const store = initStore();
export default class App extends Component {
  async constructor(props) {
    super(props);
    this.state = { loading: false };
    /* eslint-disable global-require */
    /*await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }); */
    /* eslint-enable global-require */
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Todo />
        </View>
      </Provider>
    );
  }
}
