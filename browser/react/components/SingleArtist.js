import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


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
    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => this.setState({artist}));
    axios.get(`/api/artists/${artistId}/albums`)
      .then(res => res.data)
      .then(albums => this.setState({albums}));
    axios.get(`/api/artists/${artistId}/songs`)
      .then(res => res.data)
      .then(songs => this.setState({songs}));
  }

render(){
  const artist = this.state.artist;
  console.log("SONGS: ", this.state.songs)
  return (
    <div>
      <h3>{artist.name}</h3>
      <h4>Albums</h4>
      <ul>
      { this.state.albums.map(album => {
        return (
        <div key={album.id}>
        <li>{album.name}</li>
        </div>
        )
      })}
      </ul>      <h4>Songs</h4>
      <ul>
      { this.state.songs.map(song => {
        return (
        <div key={song.id}>
        <li>{song.name}</li>
        </div>
        )
      })}
      </ul>
    </div>
  )
}
}
