import React from "react"
import { StyleSheet, Image, View, Text, Dimensions } from "react-native"
import HomeScreen from "../../screens/HomeScreen"
import MatchesScreen from "../../screens/MatchesScreen"
//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//icons
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import { CARD, COLORS } from "../../../utils/constants"
import ProfileScreen from "../../screens/ProfileScreen"
import OnlineScreen from "../../screens/OnlineScreen"
import ChatRoom from "../ChatRoom"
import MessageScreen from "../../screens/MessageScreen"
import ChatRoomHeader from "./ChatRoomHeader"
//AN CONFIG
const Stack = createNativeStackNavigator()

const ChatRoomNavigator = (props) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MatchesScreen" component={MatchesScreen} />
    <Stack.Screen
      name="Message"
      title="username"
      component={MessageScreen}
      options={{
        headerTitle: (props) => (
          <ChatRoomHeader title="username" rayan={props} {...props} />
        ),
        headerLeft: () => null,
        headerShown: true,
        headerTitleAlign: "center",
      }}
    />
  </Stack.Navigator>
)

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeTab" component={TabNavigator} />
    <Stack.Screen name="ChatRoom" component={ChatRoomNavigator} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home" //Home
      screenOptions={{
        tabBarActiveTintColor: COLORS.blue,
        tabBarStyle: {
          height: CARD.TABH - 15,
          // height: 0,
          // display: "none",
          backgroundColor: "#fff",
          borderTop: 0,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Image
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
              }}
              style={{
                width: size,
                height: size,
                borderRadius: size,
                borderWidth: focused ? 2 : 0,
                borderColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Browse",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cards" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Onlines"
        component={OnlineScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-text"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return <StackNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
