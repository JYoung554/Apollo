import React, { Component } from 'react';
// import './App.css';
import Search from '../components/Search'
import axios from 'axios'
import ArtistPost from '../components/ArtistPost';
import { Route, Switch } from 'react-router-dom';

export  default class HomePage extends Component {
  constructor(){
    super()
      this.state = {
        artists: [],
        albums: []
      }
  }


// getSearchResults = async (e) => {
//   e.preventDefault()
//   const response = await axios.get(
//     `https://api/artists?search=${this.state.searchQuery}`
//   )
//   this.setState({ searchResults: response.data.results })
//   this.setState({ searched: true })
//   this.setState({ searchQuery: '' })
// }
// handleChange = (event) => {
//   this.setState({ searchQuery: event.target.value })
// }


  render (){
    const artists = this.state.allArtists
  return (
    <div className='home-wrap'>
    <div className="Home">
      <h1>Home</h1>
    </div>
    </div>
  );
}
}
