import React, { Component } from 'react';
import './App.css';
import Search from '../components/Search'
import axios from 'axios'
import ArtistPost from '../components/ArtistPost';
import { Switch } from 'react-router-dom';

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
  // this.getArtists()
}

getAllArtists = async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/allartists')
    console.log()
    this.setState({
      allArtists: res.data.artists
    })
  } catch (error) {
    throw error
  }
}

getSearchResults = async (e) => {
  e.preventDefault()
  const response = await axios.get(
    `https://api/artists?search=${this.state.searchQuery}`
  )
  this.setState({ searchResults: response.data.results })
  this.setState({ searched: true })
  this.setState({ searchQuery: '' })
}
handleChange = (event) => {
  this.setState({ searchQuery: event.target.value })
}


  render (){
    const artists = this.state.allArtists
  return (
    
    <div className="Home">
      <Switch>
        <Route
            exact
            path="/"
            component={(routerProps) => (
              <Form
                {...routerProps}
                artists={artists}
                getAllArtists={this.getAllArtists}
              />
            )}/>
      <Search
       onSubmit={this.getSearchResults}
       value={this.state.searchQuery}
       onChange={this.handleChange}
       />
       <div className="search">
        <h1>Results</h1>
        <div className="results-grid">
          {this.state.searchResults.map((result, index) => (
            <ArtistPost
              name={result.name}
              image={result.background_image}
              onClick={()=> this.props.history.push(`/artist/details/${result.id}`)}
            />
          ))}
        </div>

       </div>
       </Switch>
    </div>
    
  );
}
}
