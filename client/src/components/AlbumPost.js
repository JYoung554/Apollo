import React, { Component } from 'react'

export default class AlbumPost extends Component {
render(){
  console.log(this.props)
  const {album, onClick} = this.props


  return (
  
    <div className='album'>
        <div className='post-body album'>
          <h1>{album.name}</h1>
          <p>{album.artist}</p>
          <p>{album.genre}</p>
          <p>{album.releaseDate}</p>
          <img src={album.image} className="image-source"></img>
        <div>
          <button
          onClick={()=>onClick(album._id)}
          className="delete-button"
        >Delete</button></div>
        </div>
      </div>
  )
}

}