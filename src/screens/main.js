import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

import { GridItem, ListItem } from '../listItems';

class Main extends Component {
  static navigationOptions = () => ({
    title: 'Main Screen'
  });

  constructor(props) {
    super(props);

    this.gridData = [
      {
        image: 'https://www.iexpats.com/wp-content/uploads/2016/07/happy-man-696x464.jpg',
        name: 'Mr. Happy'
      },
      {
        image: 'https://i.imgflip.com/vh6to.jpg',
        name: 'Mr. Sad'
      },
      {
        image: 'https://previews.123rf.com/images/deagreez/deagreez1709/deagreez170901546/87388917-close-up-portrait-of-wondered-and-shocked-young-handsome-guy-in-white-shirt-touching-his-glasses-wit.jpg',
        name: 'Mr. Wondered'
      },
      {
        image: 'https://previews.123rf.com/images/dolgachov/dolgachov1707/dolgachov170700583/81599214-close-up-of-unhappy-crying-woman.jpg',
        name: 'Ms. Unhappy'
      },
      {
        image: 'https://media.istockphoto.com/photos/angry-woman-blowing-steam-coming-out-of-ears-picture-id583986802',
        name: 'Ms. Angry'
      },
      {
        image: 'https://thumbs.dreamstime.com/z/happy-woman-presenting-open-hand-holding-something-blank-isolated-white-background-39818234.jpg',
        name: 'Ms. Happy'
      }];
  }

  render() {
    const { container, text, sectionHeader, gridContainerStyle } = styles;

    return (
      <View style = { container }>
        <ScrollView style = {{ flex: 1 }}>
          <View>
            <Text style = { sectionHeader }>Added People</Text>
          </View>
          <FlatList
            data = {[{ image: null, name: 'Name 1'}, { image: null, name: 'Name 2'}]}
            keyExtractor = { item => item.name }
            renderItem = { ({ item }) => <ListItem name= { item.name } imageSource = { item.image }/>}/>

          <View>
            <Text style = { sectionHeader }>People to Add</Text>
          </View>

          <FlatList
            data = { this.gridData }
            numColumns = { 3 }
            keyExtractor = { item => item.name }
            renderItem = { ({ item }) => <GridItem name= { item.name } imageSource = { item.image }/>}/>
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
  },
  gridContainerStyle: {
    flexDirection: 'row'
  }
});

export { Main };
