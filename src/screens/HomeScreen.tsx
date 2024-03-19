import React from 'react';
import { BackDrop } from './BackDrop';
import { PokeList } from '../widgets/PokeList';

export const HomeScreen = (_props: any) => {
  return (
    <BackDrop>
      <PokeList />
    </BackDrop>
  );
};
