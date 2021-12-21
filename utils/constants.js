import { Dimensions } from "react-native"
import Constants from "expo-constants"

const { width, height } = Dimensions.get("window")
const NHeight = Constants.statusBarHeight
const CARD = {
  WIDTH: width * 0.96,
  HEIGHT: height * 0.78,
  BORDER_RADIUS: 20,
  TABH: height * 0.12,
}

const COLORS = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  medium: "#6e6969",
  light: "#f8f4f4",
  dark: "#0c0c0c",
  danger: "#ff5252",
  lightGrey: "#F1F1F1",
  blue: "deepskyblue",
  border: "#dedede",
}
const TEXT = {
  fontSize: 16,
  color: COLORS.dark,
  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
}
export { CARD, COLORS, TEXT, width as PWidth, height as PHeight, NHeight }
