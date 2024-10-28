import { Component } from 'react'

export default class ArtistPost2 extends Component {
  render() {
    const { artist, onClick } = this.props

    return (
      <div>
        <h3>{artist.name}</h3>
        <p>{artist.year}</p>
        <p>{artist.albums}</p>
        <button
          onClick={() => {
            onClick(artist.id)
          }}
        ></button>
      </div>
    )
  }
}
