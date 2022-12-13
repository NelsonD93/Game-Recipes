const { AuthenticationError } = require('apollo-server-express');
const { Game, Item, Bag, User } = require('../models');
const List = require('../models/List');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
    getGames: async()=>{
        return Game.find({})
    },
    getOneItem: async(parent, {itemId} ) => {
    return await Item.findOne({_id: itemId})
    },
    getGameItems: async(gameId) => {
        return await Item.find({_id: gameId})
    },
    getBag: async (gameId) => {
        return await Bag.find({_id: gameId})
    },
    getOneUser: async (userId) => {
        return await User.findOne({_id: userId})
    },
    getGameUsers: async (gameId) => {
        return await User.find({})
    },
    getList: async (listId) => {
        return await List.find({_id: listId})
    }
    },
    Mutation: {

    }
};

module.exports = resolvers;