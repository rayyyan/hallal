import React from "react"
import { Image, StyleSheet, TouchableHighlight, View, Text } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons"
import { COLORS } from "../../../utils/constants"
import TText from "../TText"

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  unRed,
  caret = true,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="white" onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={{ uri: image }} />}
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{unRed}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <TText style={styles.title} numberOfLines={1}>
              {title}
            </TText>
            {subTitle && (
              <TText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </TText>
            )}
          </View>
          {caret && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color="black"
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: "white",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 35,
  },

  subTitle: {
    color: COLORS.medium,
    opacity: 0.8,
  },
  title: {
    fontWeight: "500",
    color: "black",
  },
})
export default ListItem
