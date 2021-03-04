import React, { Component } from 'react'
import '../screens/AlbumPage'

export default class AlbumDelete extends Component {
  render() {
    const { albumId, onClick } = this.props
    return (
      <div>
        <button
          albumId={albumId}
          onClick={onClick}
          className="delete-button"
        ></button>
      </div>
    )
  }
}
