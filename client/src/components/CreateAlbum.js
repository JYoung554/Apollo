/*
import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Route, Switch } from 'react-router-dom'
import { BASE_URL } from '../globals'

export default class CreateAlbum extends Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      name: '',
      genre: '',
      image: '',
      artist: '',
      releaseDate: ''
    }
  }

  addNewAlbum = async () => {
    const newAlbum = {
      name: this.state.name,
      artist: this.state.artist,
      genre: this.state.genre,
      releaseDate: this.state.releaseDate,
      image: this.state.image
    }
    try {
      const res = await axios.post(`${BASE_URL}/api/albums`, newAlbum)

      const res2 = await axios.get(`${BASE_URL}/api/albums`)
      this.setState({
        albumPost: res.data.album
      })
      return res.data
    } catch (error) {
      throw error
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      submitted: true,
      name: '',
      artist: '',
      genre: '',
      releaseDate: '',
      image: ''
    })
    this.addNewAlbum()
  }

  updateSubmitted = () => {
    this.setState({
      submitted: false
    })
  }

  render() {
    const albums = this.state.allAlbums
    return (
      <div className="home-wrap2">
        A
        <form className="form-body2" onSubmit={this.handleSubmit}>
          {' '}
          <div className="album-wrap">
            Album
            <input
              type="text"
              placeholder="Album Name"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              className="form-album"
            />
            <input
              type="text"
              placeholder="Album Genre"
              value={this.state.genre}
              onChange={this.handleChange}
              name="genre"
              className="form-album"
            />
            {/* <input
    type='text'
    placeholder='Album Description'
    value={this.state.description}
    onChange={this.handleChange}
    name='description'
    maxLength='200'
    className='form-text'
    /> */
/*}
            //<input
              type="text"
              placeholder="Album Image"
              value={this.state.image}
              onChange={this.handleChange}
              name="image"
              maxLength="200"
              className="form-album"
            />
            <input
              type="text"
              placeholder="Artist Name"
              value={this.state.artist}
              onChange={this.handleChange}
              name="artist"
              maxLength="200"
              className="form-album"
            />
            <input
              type="text"
              placeholder="Release-Date"
              value={this.state.releaseDate}
              onChange={this.handleChange}
              name="releaseDate"
              className="form-album"
            />
            <button type="submit" className="custom-btn">
              Add
            </button>
            {this.state.submitted && (
              <button className="custom-btn view-post">
                <NavLink className="view-btn" to="/albums">
                  View Albums
                </NavLink>
              </button>
            )}
          </div>
        </form>
        <div></div>
      </div>
    )
  }
}*/
