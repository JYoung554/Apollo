import React, { Component } from 'react'

export default class AlbumPost extends Component {
render(){
  console.log(this.props)
  const {album} = this.props
  // const {artistName, artistGenre, image, description, onClick} = this.props
  // const timestamp = createdAt
  // const date = new Date(timestamp)
  // const created = date.toDateString()

  return(
  <div>
  <div>
    <h1>{album.name}</h1>
  <p>{album.genre}</p>
  <p>{album.description}</p>
  </div>
</div>
)
}

}