import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

import { GridItem } from '../listItems';

class Main extends Component {
  static navigationOptions = () => ({
    title: 'Main Screen'
  });

  render() {
    const { container, text, sectionHeader } = styles;

    const overRideRenderItem = ({ item }) => <GridItem imageSource = { null } name = { item }/>;

    return (
      <View style = { container }>
        <ScrollView style = { flex: 1}>
          <FlatList />
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  sectionHeader: {
    fontSize: 25,
    flex: 1,
    flexDirection: 'row',
    fontWeight: '600',
    backgroundColor: 'blue',
    color: 'white',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 20,
    margin: 10,
  }
});

export { Main };
