import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { COLORS } from "../../../utils/constants"
import TText from "../TText"

const myID = "u1"
const Message = ({ message }) => {
  const isMe = myID === message.user.id
  return (
    <View style={[styles.container, isMe ? styles.containerMe : null]}>
      <TText style={[styles.text, isMe ? styles.textMe : null]}>
        {message.content}
      </TText>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderBottomLeftRadius: 5,
    padding: 5,
    margin: 5,
    maxWidth: "75%",
    alignSelf: "flex-start",
    backgroundColor: COLORS.lightGrey,
  },
  containerMe: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 5,
    alignSelf: "flex-end",
    backgroundColor: COLORS.blue,
  },
  text: {
    paddingHorizontal: 5,
  },
  textMe: {
    color: COLORS.light,
  },
})
