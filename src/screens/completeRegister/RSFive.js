import React, { useContext, useEffect, useState } from "react"
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Platform,
  View,
  ScrollView,
  Text,
} from "react-native"
import TText from "../../components/TText"
import TextInput from "../../components/TextInput"
import { COLORS } from "../../../utils/constants"
import { useHeaderHeight } from "@react-navigation/elements"
import { useRegState, useRegDispatch } from "../../context/register"
import countriesApi from "../../api/countries"

const RSFive = ({ navigation }) => {
  const { user } = useRegState()
  const dispatch = useRegDispatch()
  const [loading, setLoading] = useState(false)

  const [searchTitle, setSearchTitle] = useState("")

  const [countries, setCountries] = useState([])
  useEffect(() => {
    setLoading(true)
    navigation.setOptions({ title: "Your origin country " })
    loadCountries()
    setLoading(false)
    //console.log(countries)
  }, [])

  const loadCountries = async () => {
    const response = await countriesApi.getCountries()
    setCountries(response.data)
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <TextInput
            keyboardType="text"
            placeholder="Country"
            onChangeText={(text) => setSearchTitle(text)}
            // maxLength={2}
          />
        </View>
        <Text>
          {searchTitle.length >= 4 ? (
            <Text>
              {loading ? (
                <Text>Loading ...</Text>
              ) : (
                countries
                  .filter((value, i) => {
                    if (searchTitle === "") {
                      return value
                    } else if (
                      value.country_name
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase())
                    ) {
                      return value
                    }
                  })

                  .map((item, i) => (
                    <View key={i + item.country_short_name + Math.random() * i}>
                      <Text>{item.country_name}</Text>
                    </View>
                  ))
              )}
            </Text>
          ) : null}
        </Text>
      </ScrollView>
      <View style={[styles.continue, { height: 50 }]}>
        <Pressable
          onPress={() => {
            navigation.navigate("RST5")
            dispatch({
              type: "CONTINUE",
              payload: {
                country: "russia",
              },
            })
          }}
        >
          <TText style={styles.btn}>continue</TText>
        </Pressable>
      </View>
    </View>
  )
}

export default RSFive

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  continue: {
    width: "70%",
    alignSelf: "center",
    justifyContent: "flex-end",
    marginVertical: 15,
  },
  btn: {
    color: "white",
    textAlign: "center",
    backgroundColor: COLORS.blue,
    width: "100%",
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 200,
    height: 200,
  },
  imageSelected: {
    borderWidth: 2,
    borderColor: COLORS.blue,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
  },
})
