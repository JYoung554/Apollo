import React, { Component } from 'react';
import axios from 'axios'
import { NavLink, Route, Switch } from 'react-router-dom';

export  default class HomePage extends Component {
  constructor(){
    super()
      this.state = {
        artists: [],
        albums: [],
        name:'',
        genre:'',
        description: ''
      }
  }


  addNewArtist = async () => {
    const newArtist = {
      name: this.state.name,
      description: this.state.description,
      genre: this.state.genre
    }
    try {
      const res = await axios.post('http://localhost:3001/api/artists', newArtist)
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

  handleChange = ({target}) =>{
    this.setState({
      [target.name]: target.value
    })
      console.log('Submit', this.state)
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.setState({
        submitted : true,
        name:'',
        description:'',
        genre:''
      })
    this.addNewArtist()
  }

updateSubmitted = ()=>{
  this.setState({
    submitted:false
  })
}  


  render (){
    const artists = this.state.allArtists
  return (
    <div className='home-wrap'>
    <div className="Home">
      <h1>Apollo</h1>
    </div>
      
    <div><h3 className='add'>Add Artist/Album</h3>
    <form className='form-body' onSubmit={this.handleSubmit}>
    <input
    type='text'
    placeholder='Artist Name'
    value={this.state.name}
    onChange={this.handleChange}
    name='name'
    className='form-artist'
    />

<input
    type='text'
    placeholder='Artist Genre'
    value={this.state.genre}
    onChange={this.handleChange}
    name='genre'
    className='form-artist'
    />


  <input
    type='text'
    placeholder='Artist Description'
    value={this.state.description}
    onChange={this.handleChange}
    name='description'
    maxLength='200'
    className='form-text'
    />

    <button type='submit' className='custom-btn'>Add</button>

    {this.state.submitted && (
      <button className='custom-btn view-post'><NavLink className='view-btn' to='/artists'>View Artists</NavLink></button>
    )}

    </form>
    <div>
      
    </div>
  </div>
  </div>
  );
}
}
