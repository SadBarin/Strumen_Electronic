import React, { Component } from 'react';
import './app.css';

import AppPanel from "../app-panel";
import AppGrid from "../app-grid";

export default class App extends Component {
  render() {
    return (
      <main className='layout position-relative'>
        <AppPanel/>
        <AppGrid/>
      </main>
    )
  }
}
