import React, { useReducer, createContext } from 'react'

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
})

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT': {
      return {
        ...state,
        user: null,
      }
    }
    default:
      return state
  }
}

function authProvider(props) {
  const [state, dispatch] = useReducer(authReducer, { user: null })
}
