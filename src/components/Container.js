import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Container = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>
}

export default Container

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 5,
    flex: 1,
  },
})
