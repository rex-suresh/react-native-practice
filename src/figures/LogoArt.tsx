import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const logoImg = '../../resources/images/pokedex.png';

const screenWidth = Dimensions.get('window').width;

export const LogoArt = () => (
  <View style={styles.logoBox}>
    <Image source={require(logoImg)} style={styles.logo} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  logoBox: {
    maxHeight: 100,
    maxWidth: screenWidth,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    maxHeight: 100
  }
});
