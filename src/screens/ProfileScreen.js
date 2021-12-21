import React from "react"
import { StyleSheet, Text, View, ImageBackground } from "react-native"
import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons"
import ListItem from "../components/ListItem"
import Icon from "../components/Icon"
import Carousel, { defaultStyles } from "pinar"
import TText from "../components/TText"

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.general}>
        <ImageBackground
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
          }}
          style={styles.image}
        >
          <View style={styles.edit}>
            <MaterialCommunityIcons
              style={styles.pen}
              name="pencil"
              size={24}
              color="black"
            />
          </View>
        </ImageBackground>

        <TText>Rayan</TText>
      </View>
      <ListItem
        title="Mosh Hamadani"
        IconComponent={
          <Icon
            VectorName={Ionicons}
            name="filter"
            size={60}
            iconColor="black"
            backgroundColor="white"
          />
        }
      />
      <ListItem
        title="Mosh Hamadani"
        IconComponent={
          <Icon
            VectorName={MaterialCommunityIcons}
            name="account-outline"
            size={60}
            iconColor="black"
            backgroundColor="white"
          />
        }
      />
      <ListItem
        title="Mosh Hamadani"
        IconComponent={
          <Icon
            VectorName={AntDesign}
            name="exclamationcircleo"
            size={60}
            iconColor="black"
            backgroundColor="white"
          />
        }
      />
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Carousel
          showsControls={false}
          dotStyle={{
            ...defaultStyles.dot,
            width: 5,
            height: 5,
          }}
          activeDotStyle={{
            ...defaultStyles.dot,
            backgroundColor: "#000",
            width: 5,
            height: 5,
          }}
        >
          <View style={styles.slide}>
            <TText style={styles.text}>Discover who liked you</TText>
            <TText style={styles.subTitle}>
              See who liked you to match instantly
            </TText>
          </View>
          <View style={styles.slide}>
            <TText style={styles.text}>Derblur all the pictures</TText>
            <TText style={styles.subTitle}>
              No more blurred pictures in a profile
            </TText>
          </View>
          <View style={styles.slide}>
            <TText style={styles.text}>Boost your profile</TText>
            <TText style={styles.subTitle}>
              Boost by ten the impact of your profile
            </TText>
          </View>
          <View style={styles.slide}>
            <TText style={styles.text}>Unlimited Likes !</TText>
            <TText style={styles.subTitle}>
              Unlock your likes limit and increase your chances of getiting
              matches
            </TText>
          </View>
          <View style={styles.slide}>
            <TText style={styles.text}>Who is online ?</TText>
            <TText style={styles.subTitle}>
              Like and directly engage in conversation without waiting hours !
            </TText>
          </View>
        </Carousel>
      </View>
      <View
        style={{
          backgroundColor: "deepskyblue",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          marginHorizontal: 15,
          borderRadius: 5,
          marginBottom: 15,
        }}
      >
        <TText style={{ color: "#fff" }}>Get Hallal Premium</TText>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 15,
  },
  general: { alignItems: "center" },
  image: {
    width: 110,
    height: 110,
    borderRadius: 65,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  edit: {
    backgroundColor: "white",
    width: 65,
    height: 65,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
  pen: {
    top: -15,
  },
  slide: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
  },
  subTitle: {
    color: "black",
    textAlign: "center",
    fontSize: 12,
    opacity: 0.7,
  },
})
