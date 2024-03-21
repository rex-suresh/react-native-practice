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
    <PokeArt imageUrl={imageUrl} />
  </View>
);

const styles = StyleSheet.create({
  artBox: {
    aspectRatio: 1,
    maxWidth: 250
  },
  art: {
    width: '100%',
    aspectRatio: 1
  },
  container: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
});
