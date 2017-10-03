/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, Linking } from 'react-native';

import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button.js';

const propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    thumbnail_image: PropTypes.string.isRequired, //eslint-disable-line camelcase
  }),
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

const openAlbum = url => Linking.openURL(url);

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image: thumbnail, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: thumbnail }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button text="Buy Now" onPress={() => openAlbum(url)} />
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = propTypes;

export default AlbumDetail;
