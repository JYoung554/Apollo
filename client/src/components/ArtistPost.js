import React, { Component } from 'react'

export default class ArtistPost extends Component {
render(){
  console.log(this.props)
  const {artist} = this.props
  // const timestamp = createdAt
  // const date = new Date(timestamp)
  // const created = date.toDateString()

  return (
  
    <div>
        <div>
          <h1>{artist.name}</h1>
        <p>{artist.genre}</p>
        <p>{artist.description}</p>
        </div>
      </div>
  )
}

}