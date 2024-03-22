import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { PokemonProp } from '../utils/models';

type ImagePropType = {
  imageUrl: string;
  loadEndCallback?: () => void;
};

const PokeImage = ({ imageUrl, loadEndCallback }: ImagePropType) => (
  <Image
    source={{ uri: imageUrl, cache: 'only-if-cached' }}
    style={styles.art}
    onLoadEnd={loadEndCallback}
  />
);

export const PokeArt = ({ imageUrl }: ImagePropType) => {
  return (
    <View style={styles.artBox}>
      <PokeImage imageUrl={imageUrl} />
    </View>
  );
};

export const PokeArtContainer = ({ pokemon }: PokemonProp) => {
  const [isShiny, setShiny] = useState(false);

  const toggleShine = () => {
    setShiny(!isShiny);
  };

  return (
    <Pressable onPress={toggleShine}>
      <View style={styles.container}>
        {isShiny ? (
          <PokeArt imageUrl={pokemon.shinyImage} />
        ) : (
          <PokeArt imageUrl={pokemon.mainImage} />
        )}
      </View>
    </Pressable>
  );
};

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
