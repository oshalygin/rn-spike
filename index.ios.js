import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/common/Header';
import AlbumList from './src/components/albums';

const Application = () => {
  return (
    <View>
      <Header text="Albums" />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => Application);
