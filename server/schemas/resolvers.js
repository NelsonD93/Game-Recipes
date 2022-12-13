const { AuthenticationError } = require('apollo-server-express');

const { Bag, Game, Item, List, User } = require('../models');

// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getGames: async () => {
            return Game.find({})
        },
        getOneItem: async (parent, { itemId }) => {
            return Item.findOne({ _id: itemId })
        },
        getGameItems: async (gameId) => {
            return Item.find({ _id: gameId })
        },
        getBag: async (gameId, userId) => {
            return Bag.find({ gameId: gameId, userId: userId })
        },
        getOneUser: async (userId) => {
            return User.findOne({ _id: userId })
        },
        getGameUsers: async (gameId) => {
            return User.find({}) // Maybe just scrap / ignore for now
        },
        getList: async (listId) => {
            return List.find({ _id: listId })
        }
    },
    Mutation: {

        // Mutation to build a shopping list of raw materials needed to build an item. Takes an itemId as an argument and returns a list of ingredients
        buildList: async (parent, { itemId }) => {
            // Starting array of raw materials. Ingredient objects will be added to it via recursiveList function. Ingredients will need to be grouped by name/id after and quantities added together
            const ungroupedRawArray = [];
            // Recursive function to push ingredients onto ungroupedRawArray
            const recursiveList = async (ingredient) => {
                const buildItem = await Item.findOne({ _id: ingredient.itemId });
                const listArray = [...buildItem.recipe];
                if (listArray.length === 0) {
                    ungroupedRawArray.push(ingredient);
                    return;
                } else {
                    for (let index = 0; index < listArray.length; index++) {
                        const element = array[index];
                        return recursiveList(element);
                    }
                }
            }
            // The item that the user wants to make
            const endItem = await Item.findOne({ _id: itemId });
            // Calling the recursive function to populate ungroupedRawArray
            recursiveList(endItem);

            // An empty array to store consolidated raw materials
            const groupedRawArray = [];

            ungroupedRawArray.forEach(element => {
                // Find function to see if ingredient is already in grouped
                function onList(ingredient) {
                    return ingredient.itemId === element.itemId;
                }
                const foundElement = groupedRawArray.find(onList);
                // If the element is already in the grouped array, get the quantity of it, add it to the current element qty, filter it out of groupedRawArray, and then push a new ingredient object with the updated quantity to the groupedRawArray
                if (foundElement) {
                    const foundId = foundElement.itemId;
                    const foundQty = foundElement.qty;
                    const elementQty = element.qty;
                    const newQty = foundQty + elementQty;
                    groupedRawArray = groupedRawArray.filter((ingredient) => {
                        return ingredient.itemId !== foundId;
                    });
                    groupedRawArray.push({ itemId: foundId, qty: newQty });
                    // If it's not found, push the ingredient to the groupedRawArray
                } else {
                    groupedRawArray.push({ itemId: element.itemId, qty: element.qty });
                }
            });
            return groupedRawArray;
        }
    }
};

module.exports = resolvers;
