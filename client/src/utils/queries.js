import { gql } from '@apollo/client';

export const GET_GAMES = gql`
query getGames {
  getGames {
    _id
    name
  }
}
`;

export const GET_ONE_ITEM = gql`
query getOneItem($itemId: ID!) {
  getOneItem(itemId: $itemId) {
    _id
    description
    gameId
    name
    recipe {
      itemId
      itemName
      qty
    }
  }
}
`;

export const GET_GAME_ITEMS = gql`
query getGameItems($gameId: ID!) {
  getGameItems(gameId: $gameId) {
    _id
    description
    gameId
    name
    recipe {
      itemId
      itemName
      qty
    }
  }
}
`;

export const GET_ONE_USER = gql`
query getOneUser($userId: ID!) {
  getOneUser(userId: $userId) {
    _id
    name
    email
    games
    lists
  }
}
`;

export const GET_LIST = gql`
query getList($listId: ID!) {
  getList(listId: $listId) {
    _id
    userId
    name
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
        itemName
        qty
      }
    }
  }
}
`;

export const GET_USERS = gql`
query getUsers {
  getUsers {
    _id
    bags
    email
    games
    lists
    name
  }
}
`;

export const GET_LISTS = gql`
query getLists {
  getLists {
    _id
    name
    userId
    ingredients {
      itemId
      itemName
      qty
      onHand
    }
    buildStack {
      itemId
      itemName
      qty
    }
    completed
  }
}`;

export const GET_ME = gql`
query me {
  me {
    _id
    name
    email
    lists {
      _id
      name
    }
  }
}`;


