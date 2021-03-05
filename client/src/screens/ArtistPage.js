import React, { Component } from 'react'
import ArtistPost from '../components/ArtistPost'
import { Route, } from 'react-router-dom'
import axios from 'axios'

export default class ArtistPage extends Component {
  constructor(props){
    super(props)
      this.state = {
        artists:[],
      }
  }
    componentDidMount(){
      this.getAllArtists()
    }

    getAllArtists = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/artists')
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
        const res = await axios.delete(
          `http://localhost:3001/api/artists/${artistId}`
        )
        console.log(res.data)
        const res2 = await axios.get('http://localhost:3001/api/artists')
        this.setState({
          artists: res2.data.artists
        })
        return res2.data
      } catch (error) {
        throw error
      }
    }







    render(){
      if(this.state.artists.length){
        console.log(this.state.artists[0].name)
      }
      const artists = this.state.artists.map((artist, index)=>{
        
       return <ArtistPost artist={artist}
        key={`Artist${index}`}

        onClick={this.deleteArtist}      />
        })

      
    return(
      <div>
        <h1>Artist Page</h1>
      <div className='artist-body'>
        {artists}
      </div>
      </div>
    )
    }
    }