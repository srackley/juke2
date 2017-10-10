import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import Promise from 'bluebird';
import Songs from './Songs';
import AllAlbums from './AllAlbums';


export default class SingleArtist extends Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      albums: [],
      songs: [],
    };
  }

  componentDidMount() {
    const { artistId } = this.props.match.params;
    const p1 = axios.get(`/api/artists/${artistId}`);
    const p2 = axios.get(`/api/artists/${artistId}/albums`);
    const p3 = axios.get(`/api/artists/${artistId}/songs`);

    Promise.all([p1, p2, p3])
      .then(res => res)
      .then(([name, albums, songs]) => this.setState({
        artist: name.data,
        albums: albums.data,
        songs: songs.data,
      }));
  }

  render() {
    const { artist } = this.state; // or however you've named it

    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><NavLink to={`/artists/${artist.id}/albums`}activeClassName='active'>ALBUMS</NavLink></li>
          <li><NavLink to={`/artists/${artist.id}/songs`}
          activeClassName='active'>SONGS</NavLink></li>
        </ul>
        <Route path={`/artists/${artist.id}/albums`} render={() => <AllAlbums albums={this.state.albums} />} />
        <Route path={`/artists/${artist.id}/songs`} render={() => <Songs songs={this.state.songs} />} />
      </div>
    );
  }
}
