import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import Promise from 'bluebird';

export default class NotFound extends Component {
  render(){
    return (
      <div>
        <h1>404: Page not found</h1>
      </div>
    )
  }
}
