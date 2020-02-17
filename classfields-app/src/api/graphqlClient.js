import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

export const cache = new InMemoryCache()

export const graphqlClient = new ApolloClient({
  cache,
  link: new HttpLink({
    creadentials: 'include',
    uri: process.env.SERVICES_URI + '/graphql'
  })
})
