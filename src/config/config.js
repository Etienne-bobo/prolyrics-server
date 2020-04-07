const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: 'heroku_74ac03ad03149df',
    user: 'be4b274904f8c4',
    password: 'f3760626',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: 'us-cdbr-iron-east-01.cleardb.net',
      storage: path.resolve(__dirname, '../../tabtracker.mysql')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
