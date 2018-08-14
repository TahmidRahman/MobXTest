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
            source = {{ uri: imageSource }}
            style = { image }/>
            <Text style = { text }>{ name }</Text>
        </View>

        <View style = { buttonContainer }>
            <Button
              title = "ADD"
              onPress = { () => this.props.onButtonPress() }
            />
        </View>
      </View>
    );
  }
}

GridItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: viewportWidth/3 - 10,
    backgroundColor: '#edeaea',
    borderRadius: 5,
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  imageContainer: {
    height: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    resizeMode: 'contain'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop:5,
    fontSize: 14,
    textAlign: 'center'
  }
});

export { GridItem };
