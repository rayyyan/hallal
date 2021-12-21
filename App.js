import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect, useContext } from "react"
import { StyleSheet, View, Text } from "react-native"

import Screen from "./src/components/Screen"

import Navigation from "./src/components/Navigation"
import ApolloProvider from "./ApolloProvider"
import { AuthProvider } from "./src/context/auth"
import OnlineScreen from "./src/screens/OnlineScreen"
import { useAuthDispatch, useAuthState } from "./src/context/auth"
import LoginScreen from "./src/screens/LoginScreen"
import AuthNavigation from "./src/components/AuthNavigation"
import { RegProvider } from "./src/context/register"
import RSThree from "./src/screens/completeRegister/RSThree"

//AN CONFIG

export default function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <RegProvider>
          <Screen>
            {/* <Navigation /> */}
            {/*
        <StatusBar barStyle="light-content" /> */}

            <AuthNavigation />
          </Screen>
        </RegProvider>
      </AuthProvider>
    </ApolloProvider>
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
