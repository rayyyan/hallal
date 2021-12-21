import React from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
  split,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { WebSocketLink } from "@apollo/client/link/ws"
import { getMainDefinition } from "@apollo/client/utilities"
import { getToken } from "./src/context/storage"

let httpLink = createHttpLink({
  uri: "http://192.168.1.25:4000/graphql",
})

const authLink = setContext((_, { headers }) => {
  // // get the authentication token from local storage if it exists
  const token = getToken
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${getToken}` : "",
    },
  }
})

httpLink = authLink.concat(httpLink)

const wsLink = new WebSocketLink({
  uri: `ws://192.168.1.25:4000/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${getToken}`,
    },
  },
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  httpLink
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

export default function ApolloProvider(props) {
  return <Provider client={client} {...props} />
}
