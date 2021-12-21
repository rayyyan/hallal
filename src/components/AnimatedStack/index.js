import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { StyleSheet, Text, useWindowDimensions, View } from "react-native"

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedGestureHandler,
  useDerivedValue,
  interpolate,
  runOnJS,
} from "react-native-reanimated"
import { PanGestureHandler } from "react-native-gesture-handler"

//images
import Like from "./../../../assets/images/LIKE.png"
import Nope from "./../../../assets/images/nope.png"

//AN CONFIG
const ROTATION = 30
const SWIPE_VELOCITY = 800
const AnimatedStack = (props) => {
  const { data, renderItem, onSwipeRight, onSwipeLeft } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(currentIndex + 1)
  //
  const currentProfile = data[currentIndex]
  const nextProfile = data[nextIndex]
  //
  const { width: screenWidth } = useWindowDimensions()
  const hiddenTranslateX = 2 * screenWidth

  const translateX = useSharedValue(1)
  const sharedValue = useSharedValue(1)
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      "deg"
  )
  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }))
  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 10], [0, 1]),
    right: interpolate(
      translateX.value,
      [0, hiddenTranslateX / 3, hiddenTranslateX],
      [-120, 40, 40]
    ),
  }))

  const nopeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 10], [0, 1]),
    left: interpolate(
      -translateX.value,
      [0, hiddenTranslateX / 3, hiddenTranslateX],
      [-120, 40, 40]
    ),
  }))
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX
    },
    onEnd: (event) => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0)
        return false
      }
      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {
          overshootClamping: 1,
          restDisplacementThreshold: 230,
          restSpeedThreshold: 450,
        },
        () => {
          runOnJS(setCurrentIndex)(currentIndex + 1)
        }
      )
      const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft
      runOnJS(onSwipe)(currentProfile)
    },
  })
  useEffect(() => {
    translateX.value = 0
    setNextIndex(currentIndex + 1)
  }, [currentIndex, translateX])
  return (
    <View style={styles.root}>
      {nextProfile && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard /*nextCardStyle*/]}>
            {renderItem({ item: nextProfile })}
          </Animated.View>
        </View>
      )}
      {currentProfile && (
        <>
          <Animated.Image
            source={Like}
            style={[styles.like, likeStyle]}
            resizeMode="contain"
          />

          <Animated.Image
            source={Nope}
            style={[styles.like, nopeStyle]}
            resizeMode="contain"
          />

          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[cardStyle]}>
              {renderItem({ item: currentProfile })}
            </Animated.View>
          </PanGestureHandler>
        </>
      )}
    </View>
  )
}
export default AnimatedStack
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  // inLikeContainer: {
  //   width: "100%",
  //   justifyContent: "space-between",
  //   alignItems: "flex-start",
  //   position: "absolute",
  // },
  like: {
    width: 120,
    height: 120,
    position: "absolute",
    top: "35%",
    zIndex: 15,
    elevation: Platform.OS === "android" ? 15 : 0,
  },
})
