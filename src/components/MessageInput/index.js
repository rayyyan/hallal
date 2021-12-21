import React, { useState } from "react"
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import {
  SimpleLineIcons,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons"
import { COLORS } from "../../../utils/constants"
const MessageInput = () => {
  const [message, setMessage] = useState("")
  const hendleSend = () => {
    if (!message) console.warn("cannot send empty message")
    //send Message
    setMessage("")
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons
          style={styles.icon}
          name="emotsmile"
          size={24}
          color="#595959"
        />
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          //placeholderTextColor="black"
        />
        <Feather style={styles.icon} name="camera" size={24} color="#595959" />
        <MaterialCommunityIcons
          style={styles.icon}
          name="microphone-outline"
          size={24}
          color="#595959"
        />
      </View>
      <Pressable onPress={hendleSend} style={styles.buttonContainer}>
        {message ? (
          <Ionicons name="send" size={18} color="white" />
        ) : (
          <AntDesign name="plus" size={24} color="white" />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default MessageInput

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: { flex: 1, marginHorizontal: 5 },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.lightGrey,
    borderColor: COLORS.border,
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    alignItems: "center",
    padding: 5,
  },
  buttonContainer: {
    height: 40,
    width: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.blue,
  },
  buttonText: {
    color: "white",
    fontSize: 35,
  },
})
