import React, { Component } from 'react'

export default class AlbumPost extends Component {
render(){
  console.log(this.props)
  const {album, onClick} = this.props
  // const {artistName, artistGenre, image, description, onClick} = this.props
  // const timestamp = createdAt
  // const date = new Date(timestamp)
  // const created = date.toDateString()

  return (
  
    <div>
        <div className='post-body'>
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