const Artist = require('../models/Artist');
const AddArtist = async (request, response) => {
    try {
        const artist = await new Artist(request.body)
        artist.save()
        return response.status(201).json({
            artist,
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}
module.exports = {
    AddArtist,
}