const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
router.get('/', (req, res) => res.send('This is root!'))

router.post('/artists/add', controllers.addArtist)
router.get('/artists', controllers.getArtists)
router.delete('/artist/delete/:id', controllers.deleteArtist)

router.post('/albums/add', controllers.addAlbum)
router.get('/albums', controllers.getAlbum)
router.delete('/album/delete/:id', controllers.deleteAlbum)




module.exports = router;