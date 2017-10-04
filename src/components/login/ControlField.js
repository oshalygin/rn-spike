import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

import colors from '../../styles/colors.js';

const propTypes = {
  value: PropTypes.string,
};

const styles = {
  root: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    color: colors.neutral.black,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontWeight: '600',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
};

const ControlField = ({ label, value, placeholder, onChange, isPassword }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={isPassword}
        placeholder={placeholder}
        style={styles.inputStyle}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

ControlField.propTypes = propTypes;

export default ControlField;
