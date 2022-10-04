const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
//router.get('/', (req, res) => res.send('This is root!'))

router.get('/artists', controllers.getArtists)
router.post('/artists', controllers.addArtist)

router.delete('/artists/:id', controllers.deleteArtist)

router.get('/api/albums', controllers.getAlbum)
router.post('/api/albums', controllers.addAlbum)

router.delete('/api/albums/:id', controllers.deleteAlbum)

module.exports = router
