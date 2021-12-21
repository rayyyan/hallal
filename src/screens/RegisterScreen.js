import React from "react"
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Platform,
  View,
  ScrollView,
} from "react-native"
import TText from "../components/TText"
import TextInput from "../components/TextInput"
import { COLORS } from "../../utils/constants"
import { useHeaderHeight } from "@react-navigation/elements"
import { useNavigation } from "@react-navigation/core"

const RegisterScreen = () => {
  const Header = 100 + useHeaderHeight()
  const navigation = useNavigation()
  //console.warn(Header)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        // padding: 10,
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
          // padding: 10,
          justifyContent: "center",
          backgroundColor: "white",
        }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Header}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../assets/images/logo-red.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            size={20}
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            name="email"
            style={styles.input}
          />
          <TextInput
            autoCapitalize="none"
            icon="lock"
            size={20}
            placeholder="Password"
            name="password"
            secureTextEntry
            textContentType="password"
            style={styles.input}
          />

          <TextInput
            autoCapitalize="none"
            icon="lock"
            size={20}
            placeholder="Repeat password"
            name="password"
            secureTextEntry
            textContentType="password"
            style={styles.input}
          />
          <Pressable
            onPress={() => {
              navigation.navigate("LoginScreen")
            }}
          >
            <TText style={{ color: COLORS.blue, textAlign: "center" }}>
              Already have an account ?
            </TText>
          </Pressable>
        </ScrollView>
        <View style={[styles.continue, { height: 50 }]}>
          <Pressable
            onPress={() => {
              navigation.navigate("RST1")
            }}
          >
            <TText style={styles.btn}>Continue</TText>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  input: {
    // maxHeight: 50,
    // borderRadius: 25,
    // borderWidth: 0.5,
    // marginHorizontal: 20,
    // paddingLeft: 10,
    // marginVertical: 5,
    // borderColor: "rgba(0,0,0,0.2)",
    // color: "black",
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
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
})
