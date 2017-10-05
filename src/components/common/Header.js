import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';

const propTypes = {
  text: PropTypes.string.isRequired,
  rightIconOnPress: PropTypes.func,
};

const styles = {
  textStyle: {
    fontSize: 20,
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    paddingTop: 15,
    justifyContent: 'center',
  },
  rightIconText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.brand.brightBlue,
  },
  viewStyle: {
    height: 60,
    paddingTop: 15,
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.neutral.fog,
    shadowColor: colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  },
};

const Header = ({ text, rightIconOnPress }) => {
  const rightIconExists = !!rightIconOnPress;
  const icon = rightIconExists ? (
    <TouchableOpacity style={styles.rightIcon} onPress={rightIconOnPress}>
      <Text style={styles.rightIconText}>LogOut</Text>
    </TouchableOpacity>
  ) : (
    <Text />
  );
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{text}</Text>
      {icon}
    </View>
  );
};

Header.propTypes = propTypes;

export default Header;
