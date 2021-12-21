import React from "react"
import { StyleSheet, View, Text } from "react-native"

import users from "./../../assets/data/users"
import Card from "./../../src/components/Card"

import AnimatedStack from "./../../src/components/AnimatedStack"

import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { CARD } from "../../utils/constants"

//AN CONFIG
const HomeHeader = () => (
  <View style={styles.header}>
    <FontAwesome name="heart" size={24} color="deepskyblue" />
    <Text style={styles.title}> 𝒽 𝒶 𝓁 𝓁 𝒶 𝓁 </Text>
    <Ionicons name="filter" size={24} color="deepskyblue" />
  </View>
)
export default function HomeScreen() {
  const onSwipeLeft = (user) => {
    // console.warn("swipe left" + user.name)
  }
  const onSwipeRight = (user) => {
    // console.warn("swipe right" + user.name)
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      <AnimatedStack
        data={users}
        renderItem={({ item, num }) => <Card user={item} num={num} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: CARD.TABH - 35,
    width: "100%",
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "deepskyblue",
    fontWeight: "bold",
    fontSize: 25,
    transform: [{ scale: 1.5 }],
  },
})
