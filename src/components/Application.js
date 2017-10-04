import React from 'react';
import { View } from 'react-native';

import Header from './common/Header';
import AlbumList from './albums/Albums.js';

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

export default Application;
