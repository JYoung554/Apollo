import React, { Component } from 'react';
import './App.css';
import HomePage from './screens/HomePage'
import axios from 'axios'
import { Route, Switch, } from 'react-router-dom'
import ArtistPage from './screens/ArtistPage';
import AlbumPage from './screens/AlbumPage';
import Nav from './components/Nav'


export  default class App extends Component {
  constructor(){
    super()
      this.state = {
        genres:[],
        searchQuery: '',
        searchResults: [],
        searched: false,
        artists: [],
        albums: []
      }
  }
componentDidMount(){
  this.getAllArtists()
}

getAllArtists = async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/artists')
    console.log(res)
    this.setState({
      artists: res.data.artists
    })
  } catch (error) {
    throw error
  }
}

  render (){
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path='/' >
        <HomePage/>
        </Route>
        <Route path='/artists'>
        <ArtistPage artists={this.state.artists}/>
        </Route>
        <Route path='/albums'>
        <AlbumPage albums={this.state.albums}/>
        </Route>

      </Switch>

    
    </div>
  );
}
}
