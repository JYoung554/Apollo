import React, { Component } from 'react'

export default class ArtistPost extends Component {
render(){
  const {artistName, artistGenre, image, description, onClick} = this.props
  // const timestamp = createdAt
  // const date = new Date(timestamp)
  // const created = date.toDateString()

  return (
    <div onclick={onClick} className='artist-post'>
      <div className='artist-details'>
        <div className='artist-wrap'>
        <img src={image} alt='poster'/>
        <h3 className='artist-name'>{artistName}</h3>
        </div>
        <div>
        <p className='artist-genre'>{artistGenre}</p>
        <p className='artist-description'>{description}</p>
        </div>
      </div>
    </div>
  )
}

}