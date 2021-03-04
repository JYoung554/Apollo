import React, { Component } from 'react';
import './App.css';
import HomePage from './screens/HomePage'
import axios from 'axios'
import { Route, Switch, } from 'react-router-dom'


export  default class App extends Component {
  constructor(){
    super()
      this.state = {
        genres:[],
        searchQuery: '',
        searchResults: [],
        searched: false,
        artists: []
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
      <Switch>
      <Route exact path='/' >
        <HomePage/>
        </Route>
      


      </Switch>

    
    </div>
  );
}
}
