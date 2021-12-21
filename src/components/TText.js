import React from "react"
import { Text } from "react-native"
import { TEXT } from "../../utils/constants"

function TText({ children, style, ...otherProps }) {
  return (
    <Text style={[TEXT, style]} {...otherProps}>
      {children}
    </Text>
  )
}

export default TText
