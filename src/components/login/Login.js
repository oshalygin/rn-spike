/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase';
import { View, Text } from 'react-native';

import Header from '../common/Header';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import ControlField from './ControlField';

import colors from '../../styles/colors.js';
import Spinner from '../common/Spinner';

const styles = {
  message: {
    paddingTop: 5,
    color: colors.brand.red,
    fontWeight: '600',
    fontSize: 18,
    height: 50,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
};

class Login extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
    message: '',
    loading: false,
  };

  loginUser = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  createUser = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  onPress = async () => {
    const { email, password } = this.state;
    const { onSubmit } = this.props;

    this.setState({ message: '', loading: true });
    if (email && password) {
      this.loginUser(email, password)
        .then(() => onSubmit())
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            this.createUser(email, password)
              .catch(() =>
                this.setState({ message: 'Could not create an account' }),
              )
              .then(() => {
                this.loginUser(email, password)
                  .then(() => onSubmit())
                  .catch(() =>
                    this.setState({ message: 'Invalid Username or Password!' }),
                  );
              });
          }
          this.setState({ message: 'Invalid Username or Password!' });
        });
    }
  };

  render() {
    const { email, password, message, loading } = this.state;
    return (
      <View>
        <View>
          <Header text="Authentication" />
          <Card>
            <CardSection>
              <ControlField
                label="Email:"
                placeholder="you@email.com"
                onChange={value =>
                  this.setState({
                    email: value,
                  })}
                value={email}
              />
            </CardSection>
            <CardSection>
              <ControlField
                isPassword
                label="Password:"
                onChange={value =>
                  this.setState({
                    password: value,
                  })}
                value={password}
              />
            </CardSection>
            <CardSection>
              {loading ? (
                <Spinner />
              ) : (
                <Button onPress={this.onPress} text="Login" />
              )}
            </CardSection>
          </Card>
        </View>
        <Text style={styles.message}>{message}</Text>
      </View>
    );
  }
}

export default Login;
