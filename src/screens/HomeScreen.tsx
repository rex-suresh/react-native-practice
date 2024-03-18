import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text } from 'react-native';

const { height: windowHeight } = Dimensions.get('window');
const bgImage = '../../resources/images/pokeballBG.jpeg';

export const HomeScreen = () => <Text>Hey</Text>;
export const HomeScreenMax = () => (
  <ImageBackground
    source={require(bgImage)}
    resizeMode="cover"
    style={styles.bg}>
    <Text>Hey</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bg: { flex: 1, height: windowHeight }
});
