import React, { useContext, useEffect } from "react"
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Platform,
  View,
  ScrollView,
} from "react-native"
import TText from "../../components/TText"
import TextInput from "../../components/TextInput"
import { COLORS } from "../../../utils/constants"
const RSFour = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: "Halal" })
  }, [])
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={[styles.continue, { height: 50 }]}>
        <Pressable
          onPress={() => {
            navigation.navigate("RST4")
          }}
        >
          <TText style={styles.btn}>continue</TText>
        </Pressable>
      </View>
    </View>
  )
}

export default RSFour

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
  text: {
    fontSize: 18,
  },
})
