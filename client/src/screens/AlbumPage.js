import React, { Component } from 'react'
import AlbumPost from '../components/AlbumPost'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default class AlbumPage extends Component {
  constructor(props){
    super(props)
      this.state = {
        albums:[],
      }
  }
  componentDidMount(){
    this.getAllAlbums()
  }

  getAllAlbums = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/albums`)
      console.log(res)
      this.setState({
        albums: res.data.album
      })
    } catch (error) {
      throw error
    }
  }

  deleteAlbum = async (albumId) => {
  
    try {
      const res = await axios.delete(
        `${BASE_URL}/api/albums/${albumId}`
      )
      const res2 = await axios.get(`${BASE_URL}/api/albums`)
      this.setState({
        albums: res2.data.album
      })
      return res2.data
    } catch (error) {
      throw error
    }
  }



render(){

  if(this.state.albums){
  
  const albums = this.state.albums.map((album, index)=>{
   return <AlbumPost album={album}
    key={`Album${index}`}
    
    onClick={this.deleteAlbum}    />
    })
    return(
      <div className='album-body add2'>
        <h1 className='page-title album-title album'>Album Page</h1>
        {albums}
      </div>
    )
  }
}
}