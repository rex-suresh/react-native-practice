import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text } from 'react-native';

const bgImage = '../../resources/images/pokeBG.png';

export const HomeScreen = (_props: any) => {
  const { width, height } = Dimensions.get('window');

  return (
    <ImageBackground
      source={require(bgImage)}
      resizeMode="repeat"
      height={height}
      width={width}
      style={styles.screen}>
      <Text style={styles.box}>Hello world</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    flex: 1
  },
  box: {
    height: 30,
    width: 30,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    color: 'black'
  }
});
