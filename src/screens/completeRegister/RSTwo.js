import React, { useEffect, useState } from "react"
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
import { useHeaderHeight } from "@react-navigation/elements"
import { useRegState, useRegDispatch } from "../../context/register"

const RSTwo = ({ navigation }) => {
  const dispatch = useRegDispatch()

  const [gender, setGender] = useState(null)
  const isEmpty = gender == null ? true : false

  const handleContinue = () => {
    if (isEmpty) return false
    navigation.navigate("RST3")
    dispatch({
      type: "CONTINUE",
      payload: {
        username: "rayan",
        email: "rayan@gmail.com",
      },
    })
  }
  useEffect(() => {
    navigation.setOptions({ title: "You are" })
  }, [])
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Pressable onPress={() => setGender("male")}>
            <Image
              source={require("../../../assets/images/male.jpg")}
              style={[
                styles.image,
                gender === "male" ? styles.imageSelected : null,
              ]}
            />
          </Pressable>
          <TText style={styles.text}>Male</TText>
        </View>
        <View style={styles.imageContainer}>
          <Pressable onPress={() => setGender("female")}>
            <Image
              source={require("../../../assets/images/female.jpg")}
              style={[
                styles.image,
                gender === "female" ? styles.imageSelected : null,
              ]}
            />
          </Pressable>
          <TText style={styles.text}>Female</TText>
        </View>
      </View>

      <View style={[styles.continue, { height: 50 }]}>
        <Pressable onPress={() => handleContinue()}>
          <TText style={[styles.btn, isEmpty ? styles.disabled : null]}>
            Continue
          </TText>
        </Pressable>
      </View>
    </View>
  )
}

export default RSTwo

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
  disabled: {
    backgroundColor: COLORS.lightGrey,
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
