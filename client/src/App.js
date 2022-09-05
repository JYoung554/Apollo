import React, { Component } from 'react'
import './App.css'
import HomePage from './screens/HomePage'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import ArtistPage from './screens/ArtistPage'
import AlbumPage from './screens/AlbumPage'
import Nav from './components/Nav'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main className="app-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/artists" component={ArtistPage} />
            <Route exact path="/albums" component={AlbumPage} />
          </Switch>
        </main>
      </div>
    )
  }
}
