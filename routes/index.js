const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
router.get('/', (req, res) => res.send('This is root!'))
router.get('/allartists', controllers.getArtists)
router.post('/artists/add', controllers.AddArtist)

module.exports = router;