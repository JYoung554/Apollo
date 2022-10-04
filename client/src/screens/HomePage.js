import React, { Component } from 'react'
import axios from 'axios'
import { NavLink, Route, Switch } from 'react-router-dom'
import CreateAlbum from '../components/CreateAlbum'
import { BASE_URL } from '../globals'

export default class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      artists: [],
      albums: [],
      name: '',
      genre: '',
      yearsActive: '',
      image: '',
      artist: '',
      releaseDate: ''
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
      const res2 = await axios.get(`${BASE_URL}/artists`)
      const res = await axios.post(`${BASE_URL}/artists`, newArtist)

      this.setState({
        artistPost: res.data.artists
      })
      return res.data
    } catch (error) {
      console.log(error.res.data)
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
      yearsActive: '',
      genre: '',
      image: ''
    })
    this.addNewArtist()
  }

  updateSubmitted = () => {
    this.setState({
      submitted: false
    })
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
      const res = await axios.post(`${BASE_URL}/albums`, newAlbum)

      const res2 = await axios.get(`${BASE_URL}/albums`)
      this.setState({
        albumPost: res.data.album
      })
      return res.data
    } catch (error) {
      throw error
    }
  }

  AhandleSubmit = (event) => {
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

  render() {
    const artists = this.state.allArtists
    const albums = this.state.allAlbums
    return (
      <div className="home-wrap">
        <div className="Home">
          <h1 className="page-titleA">APOLLO!</h1>
        </div>
        <section className="form-display">
          <div className="image">
            <h3 className="add">Add Artist</h3>
          </div>
          <div className="home-body1">
            <form className="form-body1" onSubmit={this.handleSubmit}>
              <div className="artist-wrap">
                Artist
                <input
                  type="text"
                  placeholder="Artist Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  className="form-artist"
                />
                <input
                  type="text"
                  placeholder="Artist Genre"
                  value={this.state.genre}
                  onChange={this.handleChange}
                  name="genre"
                  className="form-artist"
                />
                <input
                  type="text"
                  placeholder="Years Active"
                  value={this.state.yearsActive}
                  onChange={this.handleChange}
                  name="yearsActive"
                  maxLength="200"
                  className="form-artist"
                />
                <input
                  type="text"
                  placeholder="Artist Image"
                  value={this.state.image}
                  onChange={this.handleChange}
                  name="image"
                  maxLength="200"
                  className="form-artist"
                />
                <button type="submit" className="custom-btn">
                  Add
                </button>
                {this.state.submitted && (
                  <button className="custom-btn view-post">
                    <NavLink className="view-btn" to="/artists">
                      View Artists
                    </NavLink>
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="add-div2">
            <div className="albumImage">
              <h3 className="add">Add Album</h3>
            </div>
          </div>
          <div className="home-wrap2">
            A
            <form className="form-body2" onSubmit={this.AhandleSubmit}>
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
    /> */}
                <input
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
        </section>
        <h1 className="intro">Add Your Album or Artist!</h1>
      </div>
    )
  }
}
