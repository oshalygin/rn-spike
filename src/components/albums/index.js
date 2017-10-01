import React from 'react';
import { View, Text } from 'react-native';
import api from '../../utilities/api';

class AlbumList extends React.Component {
  componentWillMount() {
    async function foobar() {
      const result = await api.get(
        'https://rallycoding.herokuapp.com/api/music_albums',
      );
      console.log(result.data);
    }

    foobar();
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
