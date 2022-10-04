const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
//router.get('/', (req, res) => res.send('This is root!'))

router.get('/artists', controllers.getArtists)
router.post('/artists', controllers.addArtist)

router.delete('/artists/:id', controllers.deleteArtist)

router.get('/albums', controllers.getAlbum)
router.post('/albums', controllers.addAlbum)

router.delete('/albums/:id', controllers.deleteAlbum)

module.exports = router
