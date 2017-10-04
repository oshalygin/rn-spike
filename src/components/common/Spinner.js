import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

const propTypes = {
  size: PropTypes.string,
};

const style = {
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Spinner = ({ size }) => {
  return (
    <View style={style.root}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

Spinner.propTypes = propTypes;

export default Spinner;
