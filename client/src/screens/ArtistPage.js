import React, { Component } from 'react'
import ArtistPost from '../components/ArtistPost'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class ArtistPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: []
    }
  }
  componentDidMount() {
    this.getArtists()
  }

  getArtists = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/artists`)
      console.log(res)
      this.setState({
        artists: res.data.artists
      })
    } catch (error) {
      throw error
    }
  }

  deleteArtist = async (artistId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/artists/${artistId}`)
      console.log(res.data)
      const res2 = await axios.get(`${BASE_URL}/artists`)
      this.setState({
        artists: res2.data.artists
      })
      return res2.data
    } catch (error) {
      throw error
    }
  }

  render() {
    if (this.state.artists.length) {
      console.log(this.state.artists[0].name)
    }
    const artists = this.state.artists.map((artist, index) => {
      return (
        <ArtistPost
          artist={artist}
          key={`Artist${index}`}
          onClick={this.deleteArtist}
        />
      )
    })

    return (
      <div>
        <h1 className="page-title">Artist Page</h1>
        <div className="artist-body">{artists}</div>
      </div>
    )
  }
}
