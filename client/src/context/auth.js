import React, { createContext } from 'react'

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
})

function authReducer(state, action) {}
