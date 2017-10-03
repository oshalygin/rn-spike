import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors.js';

const propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.neutral.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.brand.brightBlue,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: colors.brand.brightBlue,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = propTypes;

export default Button;
