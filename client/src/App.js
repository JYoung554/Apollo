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
    window.onresize = function () {
      let box = document.getElementById('size')
      const minSize = 0.5
      const maxSize = 1
      let scale = Math.min(
        window.innerWidth / (box.offsetWidth + 8),
        window.innerHeight / (box.offsetHeight + 8)
      )
      scale = Math.min(maxSize, Math.max(minSize, scale))
      document.documentElement.style.setProperty('--pageScale', scale)
    }

    return (
      <div className="App">
        <Nav />
        <main className="app-body" id="size">
          <Switch>
            <Route exact path="/api" component={HomePage} />
            <Route path="/artists" component={ArtistPage} />
            <Route path="/albums" component={AlbumPage} />
          </Switch>
        </main>
      </div>
    )
  }
}
