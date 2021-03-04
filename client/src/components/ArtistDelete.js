import React, { Component } from 'react'
import '../screens/ArtistPage'

export default class ArtistDelete extends Component {
  render() {
    const { artistId, onClick } = this.props
    return (
      <div>
        <button
          artistId={artistId}
          onClick={onClick}
          className="delete-button"
        ></button>
      </div>
    )
  }
}
