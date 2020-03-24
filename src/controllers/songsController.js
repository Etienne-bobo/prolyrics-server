const {Song} = require('../models')

module.exports = {
  async songs (req, res) {
    try {
      const Songs = await Song.findAll({
        limit: 10
      })
      res.send(Songs)
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
  }
}
