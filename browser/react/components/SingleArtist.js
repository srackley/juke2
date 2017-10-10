import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Promise from 'bluebird';
import Songs from './Songs';
import AllAlbums from './AllAlbums';


export default class SingleArtist extends Component {
  constructor() {
    super()
    this.state = {
      artist: {},
      albums: [],
      songs: []
    }
  }

  componentDidMount () {
    const artistId = this.props.match.params.artistId;
    const p1 = axios.get(`/api/artists/${artistId}`)
    const p2 = axios.get(`/api/artists/${artistId}/albums`)
    const p3 = axios.get(`/api/artists/${artistId}/songs`)

    Promise.all([p1, p2, p3])
    .then(res => res)
    .then(([name, albums, songs]) => this.setState({artist: name.data, albums: albums.data, songs: songs.data}));
  }

render(){
  const artist = this.state.artist;
  // console.log("SONGS: ", this.state.songs)
  return (
    <div>
      <h3>{artist.name}</h3>
      <h4>Albums</h4>
      <AllAlbums albums = {this.state.albums} />
      <h4>Songs</h4>
      <Songs songs = {this.state.songs}/>
    </div>
  )
}
}
