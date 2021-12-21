import React, { useCallback, useEffect, useState } from "react"
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native"
import Screen from "../components/Screen"
import { Asset, useAssets } from "expo-asset"
import AppLoading from "expo-app-loading"
import { COLORS, PHeight, PWidth } from "../../utils/constants"
import TText from "../components/TText"
import { Feather } from "@expo/vector-icons"
import {
  PanGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler"

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withTiming,
  interpolate,
  withSpring,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated"
import TextInput from "../components/TextInput"
import Svg, { Image as ImageSvg, Circle, ClipPath } from "react-native-svg"
const LoginScreen = ({ navigation }) => {
  const [assets, error] = useAssets([require("./../../assets/images/bg.jpg")])
  const [op, setOp] = useState(1)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const [KHeight, setKHeight] = useState(0)
  const opacity = useSharedValue(op)
  const rotate = useDerivedValue(() =>
    withTiming(interpolate(opacity.value, [1, 0], [120, 0]) + "deg", {
      duration: 650,
    })
  )
  const ButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 650,
      }),
    }
  })
  const ButtonY = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(interpolate(opacity.value, [0, 1], [100, 0]), {
          duration: 650,
        }),
      },
    ],
  }))
  const BgY = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(
          interpolate(
            opacity.value,
            [0, 1],
            [-PHeight / 3 - (isKeyboardVisible ? KHeight + 35 : 35), 0]
          ),
          {
            duration: 200,
          }
        ),
      },
    ],
  }))

  const SignInStyle = useAnimatedStyle(() => ({
    zIndex: withTiming(interpolate(opacity.value, [0, 1], [1, -1]), {
      duration: 650,
    }),
    opacity: withTiming(interpolate(opacity.value, [0, 1], [1, 0]), {
      duration: 650,
    }),
    transform: [
      {
        translateY: withTiming(interpolate(opacity.value, [0, 1], [0, 100]), {
          duration: 650,
        }),
      },
    ],
  }))
  const BtnClose = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: rotate.value,
      },
    ],
  }))

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      opacity.value = 1
    },
    onEnd: (event) => {
      runOnJS(Keyboard.dismiss)()
    },
  })

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setKeyboardVisible(true) // or some other action
        setKHeight(e.endCoordinates.height)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false) // or some other action
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  })
  if (!assets) {
    return <AppLoading />
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Animated.View style={[styles.image, BgY]}>
        <Image
          source={require("../../assets/images/bg.jpg")}
          style={{ flex: 1, height: PHeight, width: PWidth }}
        />
        {/* <Svg
          width={PWidth}
          height={PHeight + 50}
          style={{ position: "relative" }}
        >
          <ClipPath id="clip">
            <Circle r={PHeight + 50} cx={PWidth / 2} />
          </ClipPath>
          <ImageSvg
            href={require("../../assets/images/bg.jpg")}
            height={PHeight + 50}
            width={PWidth}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clip)"
          />
        </Svg> */}
      </Animated.View>

      <Animated.View style={[ButtonStyle, ButtonY]}>
        <View style={{ height: PHeight / 3, justifyContent: "center" }}>
          <Pressable
            onPress={() => {
              opacity.value = 0
            }}
          >
            <Animated.View style={[styles.button]}>
              <TText style={{ fontSize: 20, fontWeight: "bold" }}>
                Sign In
              </TText>
            </Animated.View>
          </Pressable>
          <Pressable
            onPress={() => {
              // opacity.value = 0
              navigation.navigate("RegisterScreen")
            }}
          >
            <Animated.View
              style={[styles.button, { backgroundColor: COLORS.blue }, ,]}
            >
              <TText style={{ fontSize: 20, fontWeight: "bold" }}>
                Sign Up
              </TText>
            </Animated.View>
          </Pressable>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          {
            height: PHeight / 3,
            ...StyleSheet.absoluteFill,
            top: null,
            justifyContent: "center",
          },
          SignInStyle,
        ]}
      >
        <TapGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.closeButton, BtnClose]}>
            {/* <Animated.Text style={[{ fontSize: 15 }, BtnClose]}>
              x
            </Animated.Text> */}
            <Feather
              style={[styles.closeIcon]}
              name="x"
              size={36}
              color={COLORS.medium}
            />
          </Animated.View>
        </TapGestureHandler>

        <View style={{ backgroundColor: "white", flex: 1, marginTop: 25 }}>
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
          <Animated.View style={[styles.button]}>
            <TText style={{ fontSize: 20, fontWeight: "bold" }}>Sign In</TText>
          </Animated.View>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  closeIcon: {
    //padding: 20,
  },
  closeButton: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -30,
    left: PWidth / 2 - 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  image: {
    flex: 1,
    height: PHeight + 20,
    ...StyleSheet.absoluteFill,
  },
  input: {
    // height: 50,
    // borderRadius: 25,
    // borderWidth: 0.5,
    // marginHorizontal: 20,
    // paddingLeft: 10,
    // marginVertical: 5,
    // borderColor: "rgba(0,0,0,0.2)",
    // color: "black",
  },
  button: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
})
