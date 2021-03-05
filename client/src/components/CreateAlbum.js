import React, { Component } from 'react';
import axios from 'axios'
import { NavLink, Route, Switch } from 'react-router-dom';

export  default class CreateAlbum extends Component {
  constructor(){
    super()
      this.state = {
        albums: [],
        name:'',
        genre:'',
        description: ''
      }
  }


  addNewAlbum = async () => {
    const newAlbum = {
      name: this.state.name,
      description: this.state.description,
      genre: this.state.genre
    }
    try {
      const res = await axios.post('http://localhost:3001/api/albums', newAlbum)
      console.log(res.data)
      const res2 = await axios.get('http://localhost:3001/api/albums')
      this.setState({
        albumPost: res2.data.album
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
    this.addNewAlbum()
  }

updateSubmitted = ()=>{
  this.setState({
    submitted:false
  })
}  


  render (){
    const albums = this.state.allAlbums
  return (
    <div className='home-wrap'>
    <div className="Home">
      <h1></h1>
    </div>
      
    <div className='add-div'><h3 className='add'>Add Album</h3>
    <form className='form-body' onSubmit={this.handleSubmit}>
    <input
    type='text'
    placeholder='Album Name'
    value={this.state.name}
    onChange={this.handleChange}
    name='name'
    className='form-album'
    />

<input
    type='text'
    placeholder='Album Genre'
    value={this.state.genre}
    onChange={this.handleChange}
    name='genre'
    className='form-album'
    />


  <input
    type='text'
    placeholder='Album Description'
    value={this.state.description}
    onChange={this.handleChange}
    name='description'
    maxLength='200'
    className='form-text'
    />

    <button type='submit' className='custom-btn'>Add</button>

    {this.state.submitted && (
      <button className='custom-btn view-post'><NavLink className='view-btn' to='/albums'>View Albums</NavLink></button>
    )}

    </form>
    <div>
      
    </div>
  </div>
  </div>
  );
}
}
