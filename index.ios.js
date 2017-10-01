import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/common/Header';

const Application = () => {
  return <Header />;
};

AppRegistry.registerComponent('albums', () => Application);
