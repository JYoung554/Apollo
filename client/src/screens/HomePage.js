import React, { Component } from 'react';
import './App.css';
import Search from '../components/Search'
import axios from 'axios'

export  default class HomePage extends Component {
  constructor(){
    super()
      this.state = {
        genres:[],
        searchQuery: '',
        searchResults: [],
        searched: false
      }
  }
componentDidMount(){
  this.getArtists()
}

// // getArtists = async ()=>{
// // const response = await axios.get()



// }

  render (){
  return (
    <div className="Home">
      <Search
       onSubmit={this.getSearchResults}
       value={this.state.searchQuery}
       onChange={this.handleChange}
       />
       <div className="search"




    </div>
  );
}
}
