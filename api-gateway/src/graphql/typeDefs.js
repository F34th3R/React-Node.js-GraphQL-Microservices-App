import { gql } from "apollo-server-express"

const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    listings: [Listing!]!
  }
`

export default typeDefs
