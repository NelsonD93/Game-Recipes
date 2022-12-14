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


input IngredientInput {
  itemId: ID!
  qty: Int!
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
    getGames: [Game]
    getOneItem(itemId: ID!): Item
    getGameItems(gameId: ID!): [Item]
    getBag(gameId: ID!, userId: ID!): Bag
    getOneUser(userId: ID!): User
    getList(listId:ID!): List
    getUsers: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addItem(name: String!, description: String!, gameId:ID!, recipe: [IngredientInput]): Item
    addGame(name:String!,admins:[ID]): Game
    addBag(gameId:ID!, userId:ID!): Bag
    subToGame(gameId:ID!): User
    buildList(itemId:ID!, userId:ID!, name:String!): List


  }
`;

module.exports = typeDefs;