import React from 'react';
import { View } from 'react-native';

import Header from './common/Header';
import AlbumList from './albums/Albums.js';
import LoginForm from './login/LoginForm';

const styles = {
  root: {
    flex: 1,
  },
};

class Application extends React.Component {
  state = {
    loggedIn: false,
  };

  render() {
    const { loggedIn } = this.state;

    if (!loggedIn) {
      return <LoginForm />;
    }

    return (
      <View style={styles.root}>
        <Header text="Albums" />
        <AlbumList />
      </View>
    );
  }
}

export default Application;
