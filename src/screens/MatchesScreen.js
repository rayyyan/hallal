import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native"
import users from "../../assets/data/users"
import { COLORS } from "../../utils/constants"
import ChatRoom from "../components/ChatRoom"
import Container from "../components/Container"
import ListItemSeparator from "../components/ListItemSeparator"
import TText from "../components/TText"

const MatchesScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Messages")
  return (
    <Container>
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.title}>New Matches</Text>
        </View>
        <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.users}>
              {users.map((user) => (
                <View style={styles.user} key={user.id}>
                  <Image source={{ uri: user.image }} style={styles.image} />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View>
          <ListItemSeparator />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableHighlight
              onPress={() => setActiveTab("Messages")}
              underlayColor={COLORS.lightGrey}
              style={{
                width: "50%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TText>Messages</TText>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => setActiveTab("Requests")}
              underlayColor={COLORS.lightGrey}
              style={{
                width: "50%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TText>Requests</TText>
            </TouchableHighlight>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent:
                activeTab == "Messages" ? "flex-start" : "flex-end",
              marginBottom: 0,
            }}
          >
            <ListItemSeparator
              style={{
                width: "50%",
                height: 1,
                backgroundColor: "black",
                opacity: 0.5,
              }}
            />
          </View>
        </View>
        <Container>
          <ChatRoom navigation={navigation} />
        </Container>
      </View>
    </Container>
  )
}

export default MatchesScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 10,
  },
  user: {
    width: 65,
    height: 65,
    padding: 2,
    borderRadius: 50,
    borderWidth: 2,
    margin: 5,
    borderColor: "deepskyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  users: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    alignSelf: "center",
  },
  title: {
    fontWeight: "400",
    fontSize: 22,
    color: "deepskyblue",
  },
})
{
  /* {activeTab == "Messages" ? (
          <FlatList
            data={menuItem}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                onPress={() =>
                  navigation.navigate(item.targetScreen.toString())
                }
                title={item.title}
                subTitle="programing with terma de rayan"
                image={
                  "https://pd2eu.badoocdn.com/p57/hidden?euri=2dLWsJnuNqwgdSNWcbW1NaJw4sSW28fasTEjB7WXezpGWmfgwKdHp8FcXiAmKAHwcusMLdR61Gwk8SXAFtg9vMaq8uqDF2W4OM4IwWra0sX87KK-5zofsajsL13Hsv4ZyRC9bOll4XCb5XUd74hy6q0F4L38p0iV&size=__size__&wm_size=87x87&wm_offs=15x15&h=cPg&gs=o&t=30.1.0.00"
                }
                caret={false}
              />
            )}
          />
        ) : (
          <TText>re</TText>
        )} */
}
