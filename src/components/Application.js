import firebase from 'firebase';

import React from 'react';
import { View } from 'react-native';

import Header from './common/Header';
import AlbumList from './albums/Albums.js';
import Login from './login/Login';
import { firebaseCredentials } from '../../utilities/firebase-credentials';
import Spinner from './common/Spinner';

const styles = {
  root: {
    flex: 1,
  },
};

class Application extends React.Component {
  state = {
    loggedIn: false,
    loading: true,
  };

  componentWillMount() {
    firebase.initializeApp(firebaseCredentials);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true, loading: false });
      } else {
        this.setState({ loading: false });
      }
    });
  }

  onLoginSubmitSuccess = () => {
    this.setState({ loggedIn: true, loading: false });
  };

  logout = () => {
    this.setState({ loading: true });
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ loggedIn: false, loading: false });
      });
  };

  render() {
    const { loggedIn, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (!loggedIn) {
      return <Login onSubmit={this.onLoginSubmitSuccess} />;
    }

    return (
      <View style={styles.root}>
        <Header text="Albums" rightIconOnPress={this.logout} />
        <AlbumList />
      </View>
    );
  }
}

export default Application;
