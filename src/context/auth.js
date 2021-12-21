import React, { createContext, useContext, useReducer } from "react"
import * as SecureStore from "expo-secure-store"

import jwtDecode from "jwt-decode"

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

const key = "authToken"
let user
let token
async function getToken() {
  const token = await SecureStore.getItemAsync("authToken")
  if (token) {
    onsole.log("token found")
    const decodedToken = jwtDecode(token)
    // const expiresAt = new Date(decodedToken.exp * 1000)
    // if (new Date() > expiresAt) {
    // } else {
    user = decodedToken
    //}
  } else console.log("No token found")
}

// const token =

const deleteToken = async (mey) => {
  const token = await SecureStore.deleteItemAsync("authToken")
  if (token) {
    console.warn("deleted token", token)
    return token
  } else {
    console.warn("error")
  }
}

const authReducer = async (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      }
    case "LOGOUT":
      return {
        ...state,
        user: null,
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user })
  return (
    <AuthDispatchContext.Provider value={dispatch}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthDispatchContext.Provider>
  )
}

export const useAuthState = () => useContext(AuthStateContext)
export const useAuthDispatch = () => useContext(AuthDispatchContext)
