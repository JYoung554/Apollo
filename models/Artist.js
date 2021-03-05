const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Artist = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    yearsActive: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },

  },
  { timestamps: true }
)
module.exports = mongoose.model('artists', Artist)