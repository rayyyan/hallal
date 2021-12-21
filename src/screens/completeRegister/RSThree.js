import React, { useContext, useEffect, useState } from "react"
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native"
import Moment from "moment"

import TText from "../../components/TText"
import TextInput from "../../components/TextInput"
import { COLORS } from "../../../utils/constants"
import { useHeaderHeight } from "@react-navigation/elements"
import { useRegState, useRegDispatch } from "../../context/register"
const RSThree = ({ navigation }) => {
  const state = useRegState()
  const dispatch = useRegDispatch()
  const [date, setDate] = useState({
    dd: "",
    mm: "",
    yy: "",
  })
  const handleChange = (text, option) => {
    if (option == 0) {
      setDate((prev) => ({ ...prev, dd: text }))
    }
    if (option == 1) {
      setDate((prev) => ({ ...prev, mm: text }))
    }

    if (option == 2) {
      setDate((prev) => ({ ...prev, yy: text }))
    }
  }
  const userDate = Moment(`${date.yy}${date.mm}${date.dd}`)

  const isAdult = Moment().diff(Moment(userDate, "YYYYMMDD"), "years") >= 18
  const isEmpty = Object.values(date).some((x) => x === null || x === "")

  const handleContinue = () => {
    if (!isAdult) return false
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
    navigation.setOptions({ title: "Your Birthdate" })
  }, [])
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 15,
        }}
      >
        <TextInput
          width="30%"
          keyboardType="numeric"
          placeholder="dd"
          onChangeText={(text) => handleChange(text, 0)}
          maxLength={2}
        />
        <Text style={styles.slash}>/</Text>
        <TextInput
          width="30%"
          keyboardType="numeric"
          placeholder="mm"
          onChangeText={(text) => handleChange(text, 1)}
          maxLength={2}
        />
        <Text style={styles.slash}>/</Text>
        <TextInput
          width="30%"
          keyboardType="numeric"
          placeholder="yy"
          maxLength={4}
          onChangeText={(text) => handleChange(text, 2)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", color: COLORS.primary }}>
          {isAdult || isEmpty ? " " : "You must be 18 years old or older"}
        </Text>
      </View>
      <View style={[styles.continue, { height: 50 }]}>
        <Pressable onPress={() => handleContinue()}>
          <TText
            style={[styles.btn, isEmpty || !isAdult ? styles.disabled : null]}
          >
            continue
          </TText>
        </Pressable>
      </View>
    </View>
  )
}

export default RSThree

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

  text: {
    fontSize: 18,
  },
  slash: {
    alignSelf: "center",
    fontSize: 21,
    color: COLORS.medium,
  },
})
