import { useNavigation } from "@react-navigation/core"
import React from "react"
import { StyleSheet, Text, View, Image, Pressable } from "react-native"
import { COLORS } from "../../../utils/constants"
import TText from "../TText"
const ChatRoomItem = ({ chatRoom }) => {
  const user = chatRoom.users[1]
  const newMessage = chatRoom.newMessages
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate(
      "ChatRoom",
      { screen: "Message", params: { id: chatRoom.id } },
      { headerLayoutPreset: "center" }
    )
  }
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />
      {newMessage && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{newMessage}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <TText style={styles.title}>{user.name}</TText>
          <TText style={styles.subtitle}>
            {chatRoom.lastMessage.createdAt}
          </TText>
        </View>
        <TText
          style={[
            styles.subtitle,
            { color: newMessage ? COLORS.black : COLORS.medium },
            { fontWeight: newMessage ? "bold" : "100" },
            { opacity: newMessage ? 0.7 : 1 },
          ]}
          numberOfLines={1}
        >
          {chatRoom.lastMessage.content}
        </TText>
      </View>
    </Pressable>
  )
}

export default ChatRoomItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: COLORS.blue,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 50,
    top: 5,
  },
  badgeText: {
    color: COLORS.light,
    fontSize: 12,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: { fontWeight: "bold", marginBottom: 3 },
  subtitle: {
    color: COLORS.medium,
  },
})
