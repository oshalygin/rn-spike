import firebase from 'firebase';

import React from 'react';
import { View } from 'react-native';

import Header from './common/Header';
import AlbumList from './albums/Albums.js';
import Login from './login/Login';
import { firebaseCredentials } from '../../utilities/firebase-credentials';

const styles = {
  root: {
    flex: 1,
  },
};

class Application extends React.Component {
  state = {
    loggedIn: false,
  };

  componentWillMount() {
    firebase.initializeApp(firebaseCredentials);
  }

  onLoginSubmitSuccess = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    const { loggedIn } = this.state;

    if (!loggedIn) {
      return <Login onSubmit={this.onLoginSubmitSuccess} />;
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
