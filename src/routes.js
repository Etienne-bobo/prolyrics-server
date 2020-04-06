const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/songsController')
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.songs)
  app.post('/songs',
    SongsController.post)
  app.get('/songs/:itemId',
    SongsController.show)
  app.put('/songs/:itemId',
    SongsController.put)
}
