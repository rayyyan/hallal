import * as SecureStore from "expo-secure-store"
import jwtDecode from "jwt-decode"
const key = "authToken"

const storeToken = async (T) => {
  console.log(T)
  const token = await SecureStore.setItemAsync(key, T)
  if (token) {
    return token
  } else {
    console.warn("error setting the token")
  }
}
const getToken = async () => {
  try {
    await SecureStore.getItemAsync(key)
  } catch (error) {
    console.log("error storing the authtoken")
  }
}
const removeToken = async () => {
  await SecureStore.deleteItemAsync(key)
}
const getUser = async () => {
  const token = await getToken()
  return token ? jwtDecode(token) : null
}
export default { getUser, getToken, storeToken, removeToken }
