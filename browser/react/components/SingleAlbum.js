import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import { ShareButtons, generateShareIcon } from 'react-share';
const {EmailShareButton} = ShareButtons;
const EmailIcon = generateShareIcon('email');

export default class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      selectedAlbum: {}
    }
  }

  componentDidMount () {
    const albumId = this.props.match.params.albumId;
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }

  render () {
    const album = this.state.selectedAlbum;

    return (
      <div className="album">
        <div>
          <h3>{ album.name } </h3>
          <EmailShareButton url={window.location} subject={album.name} body={`Check out this hot new album! \n ${window.location}`}>
          <EmailIcon/>
          </EmailShareButton>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
