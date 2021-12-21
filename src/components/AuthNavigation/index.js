import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../../screens/LoginScreen"
import RegisterScreen from "../../screens/RegisterScreen"
import TText from "../TText"
import RSTwo from "../../screens/completeRegister/RSTwo"
import RSThree from "../../screens/completeRegister/RSThree"
import RSFour from "../../screens/completeRegister/RSFour"
import RSFive from "../../screens/completeRegister/RSFive"
import RSSix from "../../screens/completeRegister/RSSix"
import RSSeven from "../../screens/completeRegister/RSSeven"
import RSEight from "../../screens/completeRegister/RSEight"
import RSNine from "../../screens/completeRegister/RSNine"
import RSTen from "../../screens/completeRegister/RSTen"
import Navigation from "../Navigation"

const rsPagination = [
  RSTwo,
  RSThree,
  RSFour,
  RSFive,
  RSSix,
  RSSeven,
  RSEight,
  RSNine,
  RSTen,
]

const Stack = createNativeStackNavigator()
const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Sign UP",
          //</NavigationContainer>
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            //</NavigationContainer> headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

        {rsPagination.map((item, i) => {
          i++
          return (
            <Stack.Screen
              key={i}
              name={"RST" + i}
              component={item}
              options={{
                headerTitle: (props) => <TText title="Subtitle" {...props} />,
                headerLeft: () => null,
                headerShown: true,
                headerTitleAlign: "center",
              }}
            />
          )
        })}
        <Stack.Screen
          name="HHome"
          component={Navigation}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="RSTwo"
          component={RSTwo}
          options={{
            headerTitle: (props) => <TText title="Subtitle" {...props} />,
            headerLeft: () => null,
            headerShown: true,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="RSThree"
          component={RSThree}
          options={{
            headerTitle: (props) => <TText title="Subtitle" {...props} />,
            headerLeft: () => null,
            headerShown: true,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="RSFour"
          component={RSFour}
          options={{
            headerTitle: (props) => <TText title="Subtitle" {...props} />,
            headerLeft: () => null,
            headerShown: true,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="RSFive"
          component={RSFive}
          options={{
            headerTitle: (props) => <TText title="Subtitle" {...props} />,
            headerLeft: () => null,
            headerShown: true,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="RSSix"
          component={RSSix}
          options={{
            headerTitle: (props) => <TText title="Subtitle" {...props} />,
            headerLeft: () => null,
            headerShown: true,
            headerTitleAlign: "center",
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})
