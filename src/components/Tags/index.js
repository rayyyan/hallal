import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Tags = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {children}
    </View>
  )
}

export default Tags

const styles = StyleSheet.create({})
