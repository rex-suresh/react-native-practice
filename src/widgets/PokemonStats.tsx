import React from 'react';
import { PokemonProp } from '../utils/models';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { capitalize } from '../utils/parsers';

const StatEntry = ({ statName, stat }: { statName: string; stat: any }) => (
  <View style={styles.statEntry}>
    <Text style={[styles.baseText, styles.statName]}>
      {capitalize(statName)}
    </Text>
    <Text style={[styles.baseText, styles.statCount]}>{stat}</Text>
  </View>
);

export const PokemonStats = ({ pokemon }: PokemonProp) => (
  <FlatList
    data={pokemon.stats}
    renderItem={({ item: [statName, stat] }) => (
      <StatEntry statName={statName} stat={stat} />
    )}
    contentContainerStyle={styles.statsBox}
    style={styles.wrapper}
    scrollEnabled={false}
  />
);

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18,
    marginHorizontal: 5
  },
  statName: {
    textAlign: 'left'
  },
  statCount: {
    textAlign: 'right'
  },
  statEntry: {
    width: '100%',
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1,
    borderRadius: 10
  },
  statsBox: {
    gap: 5,
    margin: 30,
    marginHorizontal: 20
  },
  wrapper: {
    alignSelf: 'flex-end'
  }
});
