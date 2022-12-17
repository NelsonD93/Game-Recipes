import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      name
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;


// not sure if recipe:$recipe is correct below because it needs to return an array
export const ADD_ITEM = gql`
  mutation addItem($name: String!, $description: String!, $gameId: ID!, recipe: [IngredientInput]) {
    addItem(name: $name, description: $description, gameId: $gameId, recipe: $recipe) {
        _id
        name
        description
        gameId
        recipe
      
    }
  }
`;

// not sure if admins is right because it needs to return an array
export const ADD_GAME = gql`
  mutation addGame($name: String!, $admins: ID) {
    addGame(name: $name, admins: $admins) {
        _id
        name
        admins
    }
  }
`;

export const ADD_BAG = gql`
  mutation addBag($gameId: ID!, $userId: ID!) {
    addBag(gameId: $gameId, userId: $userId) {
        _id
        gameId
        userId
        ingredients {
            itemId
            itemName
            qty
            onHand
        }
    }
  }
`;

export const SUB_TO_GAME = gql`
  mutation subToGame($gameId: ID!) {
    subToGame(gameId: $gameId) {
        _id
        name
        email
        password
        games 
        bags
        lists 
    }
  }
`;

export const BUILD_LIST = gql`
  mutation buildList($itemId: ID!, $userId: ID!, $name: String!, buildQty: Int!) {
    buildList(itemId: $itemId, userId: $userId, name: $name, buildQty: $buildQty) {
        _id
        name
        userId
        ingredients {
            itemId
            itemName
            qty
            onHand
        }
        completed
        buildStack {
            itemId
            itemName
            qty
            ingredients {
                itemId
                itemName
                qty
                onHand
            }
        }
    }
  }
`;

// not sure if onHandUpdate is correct below
export const UPDATE_ON_HAND = gql`
  mutation updateOnHand($listId: ID!, $onHandUpdate: [IngredientInput!]) {
    updateOnHand(listId: $listId, onHandUpdate: $onHandUpdate) {
        _id
        name
        userId
        ingredients {
            itemId
            itemName
            qty
            onHand
        }
        completed
        buildStack {
            itemId
            itemName
            qty
            ingredients {
                itemId
                itemName
                qty
                onHand
            }
        }
    }
  }
`;