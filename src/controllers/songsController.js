const {Song} = require('../models')

module.exports = {
  async songs (req, res) {
    try {
      let Songs = null
      const search = req.query.search
      if (req.query.search) {
        Songs = await Song.findAll({
          where: {
            $or: [
              'title', 'artist', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        Songs = await Song.findAll({
          limit: 10
        })
      }
      res.send(Songs)
    } catch (error) {
      res.status(500).send({
        'error': 'An error occurred trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findById(req.params.itemId)
      res.send(song)
    } catch (error) {
      res.status(500).send({
        'error': 'An error occurred trying to fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const Songs = await Song.create(req.body)
      res.send(Songs)
    } catch (error) {
      res.status(500).send({
        'error': 'An error occurred trying to create a new song'
      })
    }
  },
  async put (req, res) {
    try {
      const Songs = await Song.update(req.body, {
        where: {
          id: req.params.itemId
        }
      })
      res.send(Songs)
    } catch (error) {
      res.status(500).send({
        'error': 'An error occurred trying to update the song'
      })
    }
  }
}
