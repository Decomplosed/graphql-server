import React, { createContext } from 'react'

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
})

function authReducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}
