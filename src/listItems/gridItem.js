import React, { PureComponent } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';

import PropTypes from 'prop-types';

const { width: viewportWidth } = Dimensions.get('window');

class GridItem extends PureComponent {
  render() {
    const { container, imageContainer, image, buttonContainer, text } = styles;
    const { imageSource, name } = this.props;

    return (
      <View style = { container }>
        <View style = { imageContainer }>
          <Image
            source = { imageSource }
            style = { image }/>
            <Text style = { text }>{ name }</Text>
        </View>

        <View style = { buttonContainer }>
            <Button
              title = "ADD"
              onPress = { () => {} }
            />
        </View>
      </View>
    );
  }
}

GridItem.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: viewportWidth - 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    justifyContent: 'space-between'
  },
  imageContainer: {
    height: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    textAlign: 'center'
  }
});

export { GridItem };
