const User = require('../../models/User')

module.export = {
  Mutation: {
    register(_, args, context, info) {
      // TODO: validate user data
      // TODO: Make sure user doesnt already exist
      // TODO: hash password
      // TODO: create auth token
    },
  },
}
