import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/common/Header';
import AlbumList from './src/components/albums/Albums.js';

const styles = {
  root: {
    flex: 1,
  },
};

const Application = () => {
  return (
    <View style={styles.root}>
      <Header text="Albums" />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => Application);
