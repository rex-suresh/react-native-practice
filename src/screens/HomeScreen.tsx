import React from 'react';
import { BackDrop } from './BackDrop';
import { LogoArt } from '../figures/LogoArt';

export const HomeScreen = (_props: any) => {
  return (
    <BackDrop>
      <LogoArt />
    </BackDrop>
  );
};
