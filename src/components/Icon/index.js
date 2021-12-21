import React from "react"
import { StyleSheet, View } from "react-native"
function Icon({
  VectorName = { MaterialCommunityIcons },
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VectorName
        name={name}
        backgroundColor="red"
        size={size * 0.5}
        color={iconColor}
      />
    </View>
  )
}

export default Icon
const styles = StyleSheet.create({})
