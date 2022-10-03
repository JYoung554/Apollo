const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
router.get('/', (req, res) => res.send('This is root!'))

router.post('/api/artists', controllers.addArtist)
router.get('/api/artists', controllers.getArtists)
router.delete('/api/artists/:id', controllers.deleteArtist)

router.post('/api/albums', controllers.addAlbum)
router.get('/api/albums', controllers.getAlbum)
router.delete('/api/albums/:id', controllers.deleteAlbum)

module.exports = router
