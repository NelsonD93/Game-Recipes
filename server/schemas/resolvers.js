const { AuthenticationError } = require('apollo-server-express');
const { Bag, Game, Item, List, User  } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

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