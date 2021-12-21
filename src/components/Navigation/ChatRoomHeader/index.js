import { useNavigation, useRoute } from "@react-navigation/core"
import React, { useState } from "react"
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native"
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import { COLORS } from "../../../../utils/constants"

const ChatRoomHeader = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { width } = useWindowDimensions()
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // padding: 5,
        width: "90%",
        marginLeft: -20,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: COLORS.lightGrey,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {/* <Pressable>
          <Ionicons name="ios-chevron-back" size={26} color={COLORS.blue} />
        </Pressable> */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => setModalVisible(true)}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                marginLeft: -20,
                marginRight: 10,
              }}
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
              }}
            />
          </Pressable>
          <Text
            style={{
              flex: 1,
              fontWeight: "bold",
              color: "black",
            }}
          >
            {props.children}
          </Text>
        </View>
        <View>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color={COLORS.blue}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}> ff</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}
export default ChatRoomHeader

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
})
