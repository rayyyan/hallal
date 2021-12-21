import React from "react"
import { StyleSheet, TextInput as Rti, View, Platform } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { COLORS, TEXT as text } from "../../../utils/constants"

const TextInput = ({ children, icon, width = "100%", size, ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={size}
          color={COLORS.medium}
          style={styles.icon}
        />
      )}
      <Rti
        placeholderTextColor={COLORS.medium}
        {...otherProps}
        style={styles.input}
      />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  container: {
    //display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.lightGrey,
    padding: 15,
    height: 50,
    marginVertical: 10,
    borderRadius: 15,
    width: "100%",
    overflow: "hidden",
  },
  input: {
    width: "100%",
    color: "black",
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
})
