import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';

const propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired, //eslint-disable-line camelcase
  }),
};

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>

      <CardSection>
        <Text>{album.title}</Text>
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = propTypes;

export default AlbumDetail;
