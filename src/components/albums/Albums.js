import React from 'react';
import { ScrollView } from 'react-native';

import api from '../../utilities/api';
import AlbumDetail from './../albumDetail/AlbumDetail.js';

class AlbumList extends React.Component {
  state = {
    albums: [],
  };

  componentWillMount() {
    api
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(({ data }) => {
        this.setState({ albums: data });
      });
  }

  renderAlbums() {
    const { albums } = this.state;
    return albums.map((album, index) => (
      <AlbumDetail key={index} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
