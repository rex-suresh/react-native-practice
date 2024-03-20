import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type ImagePropType = {
  imageUrl: string;
};

const PokeImage = ({ imageUrl }: ImagePropType) => (
  <Image source={{ uri: imageUrl, cache: 'force-cache' }} style={styles.art} />
);

export const PokeArt = ({ imageUrl }: ImagePropType) => (
  <View style={styles.artBox}>
    <PokeImage imageUrl={imageUrl} />
  </View>
);

export const PokeArtContainer = ({ imageUrl }: ImagePropType) => (
  <View style={styles.container}>
    <PokeImage imageUrl={imageUrl} />
  </View>
);

const styles = StyleSheet.create({
  artBox: {
    width: 150,
    aspectRatio: 1
  },
  art: {
    width: '100%',
    aspectRatio: 1
  },
  container: {
    width: 170,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: 'rgba(110,110,110,0.3)'
  }
});
