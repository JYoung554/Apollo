import React, { Component } from 'react';
import axios from 'axios'
import { NavLink, Route, Switch } from 'react-router-dom';
import CreateAlbum from '../components/CreateAlbum';

export  default class HomePage extends Component {
  constructor(){
    super()
      this.state = {
        artists: [],
        albums: [],
        name:'',
        genre:'',
        yearsActive:'',
        image:''
      }
  }


  addNewArtist = async () => {
    const newArtist = {
      name: this.state.name,
      yearsActive: this.state.yearsActive,
      genre: this.state.genre,
      image: this.state.image
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
        yearsActive:'',
        genre:'',
        image:''
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
      <h1 className='page-title'>Apollo</h1>
    </div>
      <section className='form-display'>
    <div className='add-div'>
      <h3 className='add'>Add Artist</h3>
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
          placeholder='Years Active'
          value={this.state.yearsActive}
          onChange={this.handleChange}
          name='years-active'
          maxLength='200'
          className='form-artist'
        />

<input
          type='text'
          placeholder='Artist Image'
          value={this.state.image}
          onChange={this.handleChange}
          name='image'
          maxLength='200'
          className='form-artist'
        />

        <button type='submit' className='custom-btn'>Add</button>

      {this.state.submitted && (
        <button className='custom-btn view-post'><NavLink className='view-btn' to='/artists'>View Artists</NavLink></button>
      )}

      </form>
  </div>
      <div className='add-div2'>
        <CreateAlbum/>
      </div>
      </section>
  </div>
  );
}
}
