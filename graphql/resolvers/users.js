const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/User')

module.export = {
  Mutation: {
    register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODO: validate user data
      // TODO: Make sure user doesnt already exist
      // TODO: hash password
      // TODO: create auth token
      password = await bcrypt.hash(password, 12)
    },
  },
}
