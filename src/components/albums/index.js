import React from 'react';
import { View, Text } from 'react-native';

import api from '../../utilities/api';

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
    return albums.map((album, index) => <Text key={index}>{album.title}</Text>);
  }

  render() {
    console.log(this.state.albums);
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
