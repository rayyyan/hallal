import React, { useState, useEffect } from "react"
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native"
import TText from "../../components/TText"
import TextInput from "../../components/TextInput"
import { COLORS } from "../../../utils/constants"
import { useHeaderHeight } from "@react-navigation/elements"
const RSSix = ({ navigation }) => {
  const plavel = [
    "Practicing",
    "Moderately practicing",
    "Very practicing",
    "Non - practicing",
    "I keep it to myself",
  ]
  const [choice, setChoice] = useState(null)
  const Clavel = () => {
    return plavel.map((item, i) => (
      <Pressable
        style={[
          styles.choice,
          choice === item.toString() ? styles.choiceSelected : null,
        ]}
        key={i}
        onPress={() => setChoice(item)}
      >
        <Text>{item}</Text>
      </Pressable>
    ))
  }

  useEffect(() => {
    navigation.setOptions({ title: "Your practice level" })
  }, [])
  return (
    <View style={styles.container}>
      <Clavel />
      <View style={[styles.continue, { height: 50 }]}>
        <Pressable
          onPress={() => {
            navigation.navigate("RST6")
          }}
        >
          <TText style={styles.btn}>continue</TText>
        </Pressable>
      </View>
    </View>
  )
}

export default RSSix

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  continue: {
    width: "70%",
    alignSelf: "center",
    justifyContent: "flex-end",
    marginVertical: 15,
  },
  btn: {
    color: "white",
    textAlign: "center",
    backgroundColor: COLORS.blue,
    width: "100%",
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageSelected: {
    borderWidth: 2,
    borderColor: COLORS.blue,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  choice: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 5,
    width: "75%",
    borderRadius: 15,
    backgroundColor: COLORS.lightGrey,
    padding: 15,
    borderWidth: 2,
    borderColor: "white",
  },
  choiceSelected: {
    borderColor: COLORS.blue,
  },
  text: {
    fontSize: 18,
  },
})
