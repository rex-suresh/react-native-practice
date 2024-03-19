import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const PokeArt = ({ imageUrl }: { imageUrl: string }) => (
  <View style={styles.artBox}>
    <Image
      source={{ uri: imageUrl, cache: 'force-cache' }}
      style={styles.art}
      resizeMode="contain"
    />
  </View>
);

const styles = StyleSheet.create({
  artBox: {
    aspectRatio: 1,
    width: 150
  },
  art: {
    width: '100%',
    aspectRatio: 1
  }
});
