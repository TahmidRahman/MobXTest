import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

import PropTypes from 'prop-types';

class ListItem extends PureComponent {
  render() {
    const { container, imageContainer, image, buttonContainer, text } = styles;
    const { imageSource, name } = this.props;

    return (
      <View style = { container }>
        <View style = { imageContainer }>
          <Image source = { imageSource } style = { image }/>
        </View>

        <Text style = { text }> { name }</Text>

        <View style = { buttonContainer }>
          <Button
            title = "REMOVE"
            onPress = { () => {} }
          />
        </View>
      </View>
    );

  }
}

ListItem.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#edeaea',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  imageContainer: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  buttonContainer: {
    width: 100,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    textAlign: 'center'
  }
});

export { ListItem };
