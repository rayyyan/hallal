import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { ImageBackground, StyleSheet, Text, View } from "react-native"

import { CARD } from "../../../utils/constants"
import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons"
import CardScroll from "../CardScroll"
import Tags from "../Tags"

//icons

const Card = ({ user }) => {
  const { name, image, bio } = user

  return (
    <View style={styles.card}>
      <CardScroll user={user}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={{ uri: image }}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]}
            style={styles.gradient}
          />
          <View style={styles.cardInner}>
            <View style={styles.status}>
              <Text style={styles.green}></Text>
              <Text style={styles.bio}>online</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.name}>name</Text>
              <Text style={[styles.green, { backgroundColor: "#fff" }]}></Text>
              <Text style={styles.name}>23</Text>
            </View>
            <Text style={styles.bio}>Nancy-sur-Cluses</Text>
          </View>
          <View style={styles.actions}>
            <MaterialCommunityIcons
              style={styles.action}
              name="message-reply-text"
              size={27}
              color="deepskyblue"
            />
            <Feather style={styles.action} name="x" size={27} color="grey" />
            <MaterialCommunityIcons
              style={styles.action}
              name="cards-heart"
              size={27}
              color="red"
            />
          </View>
        </ImageBackground>

        <View style={styles.infoContainer}>
          <Text style={{ color: "deepskyblue" }}>BIOGRAPHY</Text>
          <Text style={styles.normal}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            officiis eius ducimus nisi. Id, doloribus numquam omnris saepe vitae
            praesentium quaerat placeat a molestias totam consectetur minus,
            inventore vel nostrum.
          </Text>
          <Text style={styles.greyTitle}>LOCATION</Text>
          <Tags>
            <View style={styles.tags}>
              <Feather
                name="flag"
                size={16}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text>Came from france</Text>
            </View>
            <View style={styles.tags}>
              <Ionicons
                name="location-outline"
                size={16}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text>Vis a paris</Text>
            </View>
          </Tags>
          <Text style={styles.greyTitle}>RELIGION</Text>
          <Tags>
            <View style={styles.tags}>
              <FontAwesome5
                name="quran"
                size={16}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text>Pratiqante</Text>
            </View>
            <View style={styles.tags}>
              <FontAwesome5
                name="wine-glass-alt"
                size={16}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text>Drinker</Text>
            </View>
            <View style={styles.tags}>
              <MaterialCommunityIcons
                name="yoga"
                size={16}
                color="black"
                style={{ marginRight: 10 }}
              />
              <Text>Dancer</Text>
            </View>
          </Tags>
        </View>
      </CardScroll>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  action: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6.68,

    elevation: 10,
  },
  actions: {
    position: "absolute",
    right: 15,
    bottom: 22,
  },

  card: {
    width: CARD.WIDTH,
    height: CARD.HEIGHT,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 10,
  },
  image: {
    backgroundColor: "#fff",
    width: CARD.WIDTH,
    height: CARD.HEIGHT,
    justifyContent: "flex-end",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
  },
  cardInner: {
    left: 15,
    bottom: 22,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  bio: {
    fontSize: 18,
    color: "#fff",
    lineHeight: 25,
  },
  green: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 0,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 0.5,
    width: 10,
    height: 10,
    borderColor: "black",
    backgroundColor: "deepskyblue",
  },
  status: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  infoContainer: {
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  normal: {
    color: "black",
    fontSize: 16,
    lineHeight: 25,
  },
  greyTitle: {
    color: "lightgrey",
    marginVertical: 10,
  },
  tags: {
    color: "black",
    backgroundColor: "#D5E6FE",
    flexDirection: "row",
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 8,
    marginBottom: 5,
  },
})
