const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
router.get('/', (req, res) => res.send('This is root!'))

router.post('/artists/', controllers.addArtist)
router.get('/artists', controllers.getArtists)
router.delete('/artists/:id', controllers.deleteArtist)

router.post('/albums/', controllers.addAlbum)
router.get('/albums', controllers.getAlbum)
router.delete('/albums/:id', controllers.deleteAlbum)




module.exports = router;