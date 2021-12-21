import React, { useState, useEffect } from "react"
import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import { gql, useLazyQuery } from "@apollo/client"
import { useAuthDispatch, useAuthState } from "./../context/auth"
import * as SecureStore from "expo-secure-store"

import jwtDecode from "jwt-decode"
import { storeToken, removeToken, getUser } from "./../context/storage"

const key = "authToken"
const LOGIN = gql`
  query login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      email
      token
      createdAt
    }
  }
`
export default function OnlineScreen(props) {
  const [variables, setVariables] = useState({
    username: "sarah",
    password: "hchicha27",
  })

  //validation
  const [errors, setErrors] = useState({})
  //dispatch
  const dispatch = useAuthDispatch()
  //graphql
  const [loginUser, { loading }] = useLazyQuery(LOGIN, {
    onCompleted: (data) => {
      dispatch({ type: "LOGIN", payload: data.login })

      SecureStore.setItemAsync("authToken", data.login.token).then()
      const decoded = data.login.token
        ? jwtDecode(data.login.token).username
        : null
      setUser(decoded)
    },
    onError: (err) => {
      console.warn(err)
      setErrors(err)
    },
  })
  //handle submit
  const submitLoginForm = (e) => {
    //  e.preventDefault()
    loginUser({ variables })
  }

  const logout = () => {
    dispatch({ type: "LOGOUT" })
    SecureStore.deleteItemAsync("authToken").then()
    setUser(null)
  }
  const [user, setUser] = useState(null)
  const checkLoginState = async () => {
    // retrieve the value of the token
    const userToken = await SecureStore.getItemAsync("authToken")
    // navigate to the app screen if a token is present
    // else navigate to the auth screen
    if (userToken) {
      const decoded = userToken ? jwtDecode(userToken).username : null
      setUser(decoded)
    }
  }

  useEffect(() => {
    checkLoginState()
  })
  return (
    <View style={styles.container}>
      {user == null ? (
        <View>
          <Button title="Login" onPress={() => submitLoginForm()} />
        </View>
      ) : null}

      {user && <Text>{user}</Text>}
      {user != null ? (
        <View>
          <Button title="out" onPress={() => logout()} />
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
