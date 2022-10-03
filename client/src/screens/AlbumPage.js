import React, { Component } from 'react'
import AlbumPost from '../components/AlbumPost'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class AlbumPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      album: []
    }
  }
  componentDidMount() {
    this.getAlbum()
  }

  getAlbum = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/albums`)
      console.log(res)
      this.setState({
        album: res.data.album
      })
    } catch (error) {
      throw error
    }
  }

  deleteAlbum = async (albumId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/albums/${albumId}`)
      const res2 = await axios.get(`${BASE_URL}/albums`)
      this.setState({
        album: res2.data.album
      })
      return res2.data
    } catch (error) {
      throw error
    }
  }

  render() {
    const albums = this.state.album.map((album, index) => {
      return (
        <AlbumPost
          album={album}
          key={`Album${index}`}
          onClick={this.deleteAlbum}
        />
      )
    })
    return (
      <div>
        <h1 className="page-title">Album Page</h1>
        <div className="artist-body">{albums}</div>
      </div>
    )
  }
}
