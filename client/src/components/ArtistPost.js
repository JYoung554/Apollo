import React, { Component } from 'react'
import ClearPost from './ArtistDelete'

export default class ArtistPost extends Component {
render(){
  console.log(this.props)
  const {artist,  onClick} = this.props


  return (
  
    <div>
        <div className='post-body'>
          <h1>{artist.name}</h1>
        <p>{artist.genre}</p>
        <p>{artist.yearsActive}</p>
        <img src={artist.image} className="image-source"></img>
        <div>
          <button
          onClick={()=>onClick(artist._id)}
          className="delete-button"
        >Delete</button></div>
        </div>
      </div>
  )
}

}