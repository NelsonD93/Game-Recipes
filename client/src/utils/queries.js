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
    query getOneItem ($itemId:ID!) {
    item (itemId: $itemId) {
        _id
        name
        description
        gameId
        recipe {
            itemId
            itemName
            qty
        }
    }
    }
`;

export const GET_GAME_ITEMS = gql`
    query getGameItems ($itemId:ID!) {
    item (gameId: $gameId) {
        _id
        name
        description
        gameId
        recipe {
            itemId
            itemName
            qty
        }
    }
    }
`;

export const GET_BAG = gql`
    query getBag ($gameId:ID!, userId:ID!) {
    bag (gameId: $gameId, userId: $userId) {
        _id
        gameId
        userId
        ingredients {
            itemId
            itemName
            qty
        }
    }
    }
`;

export const GET_ONE_USER = gql`
    query getOneUser ($userId:ID!) {
    user (userId: $userId) {
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

export const GET_LIST= gql`
    query getList ($userId:ID!) {
    user (listId: $listId) {
        _id
        listID
        name
        ingredients{
            itemId
            itemName
            qty
            onHand
        }
        completed
        buildStack{
            itemId
            itemName
            qty
        }
    }
    }
`;

export const GET_USERS = gql`
    query getUsers {
    getUsers {
        _id
        name
        }
    }
`;

export const GET_LISTS = gql`
    query getLists {
    getLists {
        _id
        name
        }
    }
`;


