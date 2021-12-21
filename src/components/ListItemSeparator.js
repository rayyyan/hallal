import React from "react"
import { StyleSheet, View } from "react-native"
import { COLORS } from "../../utils/constants"

function ListItemSeparator({ props, style }) {
  return <View style={[styles.separator, style]} />
}

export default ListItemSeparator
const styles = StyleSheet.create({
  separator: {
    backgroundColor: COLORS.light,
    width: "100%",
    height: 1,
  },
})
