import { Component } from 'react'
import axios from 'axios'

export default class HomePage2 extends Component {
  constructor() {
    super()
    this.state = {
      artists: [],
      name: '',
      year: '',
      albums: []
    }
  }
  addArtist = async () => {
    const newArtist = {
      name: this.name,
      year: this.year,
      albums: this.albums
    }
    try {
      const res = await axios.get('http://home/artists', newArtist)
      this.setState({ artistPost: res.data.artists })
      return res.data
    } catch (error) {
      throw error
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      submitted: true,
      name: '',
      year: '',
      albums: []
    })
    this.addArtist()
  }

  updateSubmitted = () => {
    this.setState({ submitted: false })
  }
}
