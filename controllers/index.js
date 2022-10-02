const Artist = require('../models/Artist')
const Album = require('../models/Album')

const addArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body)
    await artist.save()
    return res.status(201).json({
      artist
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find()
    return res.status(200).json({ artists })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params
    const removed = await Artist.findByIdAndDelete(id)
    if (removed) {
      return res.status(200).send('Artist Removed')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const addAlbum = async (req, res) => {
  try {
    const album = await new Album(req.body)
    album.save()
    return res.status(201).json({
      album
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAlbum = async (req, res) => {
  try {
    const album = await Album.find()
    return res.status(200).json({ album })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params
    const removed = await Album.findByIdAndDelete(id)
    if (removed) {
      return res.status(200).send('Album Removed')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  addArtist,
  getArtists,
  deleteArtist,
  addAlbum,
  getAlbum,
  deleteAlbum
  // findAllArtists,
  // findAllAlbums
}
