const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../config')

module.exports = (context) => {
  const authHeader = context.req.headers.authorization
}