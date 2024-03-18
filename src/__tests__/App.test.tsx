import 'react-native';
import React from 'react';
import { App } from '../App';

import renderer from 'react-test-renderer';

describe('Basic test', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
});
