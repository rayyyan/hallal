import React, { createContext, useContext, useReducer } from "react"

const RegStateContext = createContext()
const RegDispatchContext = createContext()
let user = null

const regReducer = (state, action) => {
  switch (action.type) {
    case "CONTINUE":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export const RegProvider = ({ children }) => {
  const [state, dispatch] = useReducer(regReducer, { user })
  return (
    <RegDispatchContext.Provider value={dispatch}>
      <RegStateContext.Provider value={state}>
        {children}
      </RegStateContext.Provider>
    </RegDispatchContext.Provider>
  )
}

export const useRegState = () => useContext(RegStateContext)
export const useRegDispatch = () => useContext(RegDispatchContext)
