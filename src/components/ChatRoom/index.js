import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native"
import ChatRooms from "../../../assets/dummy-data/ChatRooms"
import ChatRoomItem from "../ChatRoomItem"
import ListItemSeparator from "../ListItemSeparator"
const ChatRoom = () => {
  const ChatR = ChatRooms

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={ChatR}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
      {/* <ChatRoomItem chatRoom={ChatR} /> */}
    </View>
  )
}

export default ChatRoom

const styles = StyleSheet.create({})
