const { AuthenticationError } = require('apollo-server-express');

const { Bag, Game, Item, List, User  } = require('../models');

// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
    getGames: async()=>{
        return Game.find({})
    },
    getOneItem: async(parent, {itemId} ) => {
    return Item.findOne({_id: itemId})
    },
    getGameItems: async(gameId) => {
        return Item.find({_id: gameId})
    },
    getBag: async (gameId, userId) => {
        return Bag.find({gameId: gameId, userId: userId})
    },
    getOneUser: async (userId) => {
        return User.findOne({_id: userId})
    },
    getGameUsers: async (gameId) => {
        return User.find({}) // Maybe just scrap / ignore for now
    },
    getList: async (listId) => {
        return List.find({_id: listId})
    }
    },
    Mutation: {

        // Mutation to build a shopping list of raw materials needed to build an item. Takes an itemId as an argument and returns a list of ingredients
        buildList: async (parent, { itemId }) => {
            const buildItem = await Item.findOne({_id: itemId});
            const listArray = [];
        }
    }
};

module.exports = resolvers;
