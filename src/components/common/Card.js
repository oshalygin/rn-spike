import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import colors from '../../styles/colors.js';

const propTypes = {
  children: PropTypes.node,
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.neutral.ash,
    borderBottomWidth: 0,
    shadowColor: colors.neutral.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const Card = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

Card.propTypes = propTypes;

export default Card;
