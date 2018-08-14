/**
 * React Native App::MobxTest by Tahmid Rahman
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Router from './src/router';
import store from './src/store/listStore';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router screenProps = { store }/>
    );
  }
}
