import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import colors from '../../styles/colors.js';

const propTypes = {
  children: PropTypes.node,
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: colors.neutral.white,
    borderColor: colors.neutral.ash,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};

const CardSection = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

CardSection.propTypes = propTypes;

export default CardSection;
