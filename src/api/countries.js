import client from "./client"
const token = "getaccesstoken"

const getToken = async () => {
  const response = await client.get(token)
  return response.data.auth_token
}
getToken().then((data) =>
  client.setHeaders({
    Authorization: `Bearer ${data}`,
    Accept: "application/json",
  })
)
const countries = "countries"
const getCountries = () => client.get(countries)
const getStates = (Country) => client.get(`state/${Country}`)
export default {
  getToken,
  getCountries,
}
