const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Game {
  _id: ID!
  name: String!
  admins: [ID]
}


type Item {
_id: ID!
name: String!
description: String
gameId: ID!
recipe: [Ingredient]
}


type Ingredient {
  itemId: ID!
  qty: Int!
}

type Bag {
  _id: ID!
  gameId: ID!
  userId: ID!
  ingredients: [Ingredient]
}

type User {
  _id: ID!
  name: String!
  email: String!
  password: String!
  games: [ID]
  bags: [ID]
  lists: [ID]
}

type List {
  _id: ID!
  name: String!
  userId: ID!
  ingredients: [Ingredient]
}

  type Auth {
    token: ID!
    user: User
  }



  type Query {

  }

  type Mutation {

  }
`;

module.exports = typeDefs;