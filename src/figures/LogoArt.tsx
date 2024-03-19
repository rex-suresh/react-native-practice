import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const logoImg = '../../resources/images/pokedex.png';

export const LogoArt = () => (
  <View style={styles.logoBox}>
    <Image source={require(logoImg)} style={styles.logo} resizeMode="center" />
  </View>
);

const styles = StyleSheet.create({
  logoBox: {
    maxHeight: 100,
    width: 'auto',
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    maxHeight: 100
  }
});
