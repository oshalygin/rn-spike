import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import colors from '../../styles/colors';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  viewStyle: {
    height: 60,
    paddingTop: 15,
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral.fog,
    shadowColor: colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
};

const Header = ({ text }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

Header.propTypes = propTypes;

export default Header;
