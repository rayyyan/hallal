import React, { useEffect } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/core"
import ChatRoomData from "../../assets/dummy-data/Chats"
import Container from "../components/Container"
import Message from "../components/Message"
import MessageInput from "../components/MessageInput"

const MessageScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  navigation.setOptions({ title: "Elon Musk" })
  //console.warn(route.params?.id)
  return (
    <Container>
      <FlatList
        data={ChatRoomData.messages.reverse()} //remove on graphql
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </Container>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})
