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
        albums: [],
        artistName:'',
        description: ''
      }
  }


  addNewArtist = async () => {
    const newArtist = {
      artist: this.state.artistName,
      description: this.state.description
    }
    try {
      const res = await axios.post('http://localhost:3001/api/artist', newArtist)
      console.log(res.data)
      const res2 = await axios.get('http://localhost:3001/api/artists')
      this.setState({
        artistPost: res2.data.artists
      })
      return res2.data
    } catch (error) {
      throw error
    }
  }


  render (){
    const artists = this.state.allArtists
  return (
    <div className='home-wrap'>
    <div className="Home">
      <h1>Home</h1>
    </div>
      <h3 className='add'>Add Artist/Album</h3>
    </div>
  );
}
}
