import React, { Component } from 'react'
import AlbumPost from '../components/AlbumPost'
import axios from 'axios'

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
      const res = await axios.get('http://localhost:3001/api/albums')
      console.log(res)
      this.setState({
        albums: res.data.album
      })
    } catch (error) {
      throw error
    }
  }
render(){

  // if(this.state.albums){
  //   console.log(this.state.albums[0].name)
  // }
  const albums = this.state.albums.map((album, index)=>{
   return <AlbumPost album={album}
    key={`Album${index}`}/>
    })
    return(
      <div>
        <h1>Album Page</h1>
        {albums}
      </div>
    )
}
}