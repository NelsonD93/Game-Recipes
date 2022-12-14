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
        getGameItems: async (parent, { gameId }, context) => {
            return Item.find({ gameId: gameId })
        },
        getBag: async (parent, { gameId, userId }, context) => {
            return Bag.find({ gameId: gameId, userId: userId })
        },
        getOneUser: async (parent, { userId }, context) => {
            return User.findOne({ _id: userId })
        },
        getList: async (parent, { listId }) => {
            return List.find({ _id: listId })
        },
        getUsers: async () => {
            return User.find({})
        },
    },
    Mutation: {

        login: async (parent, { email, password }, context) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, { name, email, password }, context) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);
            return { token, user };
        },

        // Add an item to a game. args = name, description, gameId, recipe
        addItem: async (parent, { name, description, gameId, recipe }, context) => {
            const item = await Item.create({
                name: name,
                description: description,
                gameId: gameId,
                recipe: recipe
            });
            return item;
        },

        // Add a game. args = name, description, gameId, recipe. Makes the current user an admin
        addGame: async (parent, { name }, context) => {
            const game = await Game.create({
                name: name,
                // admins: [context.user._id]
            });
            return game;
        },

        // Add a bag. args = gameId, userId, ingredients
        addBag: async (parent, { gameId, userId }, context) => {
            const bag = await Bag.create({
                userId: userId,
                gameId: gameId
            });
            return bag;
        },

        // Subscribe to a game
        subToGame: async (parent, { gameId }) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    {
                        $addToSet: {
                            games: {
                                gameId: gameId
                            }
                        }
                    },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
        },

        // Mutation to build a shopping list of raw materials needed to build an item. Takes an itemId as an argument and returns a list of ingredients

        buildList: async (parent, { itemId, name, userId }) => {
            // Starting array of raw materials. Ingredient objects will be added to it via recursiveList function. Ingredients will need to be grouped by name/id after and quantities added together
            const ungroupedRawArray = [];
            let recurseCount = 0;
            // Recursive function to push ingredients onto ungroupedRawArray
            const recursiveList = async (ingredient) => {
                const buildItem = await Item.findOne({ _id: ingredient.itemId });
                const listArray = [...buildItem.recipe];
                if (listArray.length === 0) {
                    const pushObject = {
                        itemId: ingredient.itemId,
                        qty: ingredient.qty
                    };
                    ungroupedRawArray.push(pushObject);
                    return;
                } else {
                    for (let index = 0; index < listArray.length; index++) {
                        const element = listArray[index];
                        await recursiveList({
                            itemId: element.itemId,
                            qty: element.qty
                        });
                    }
                }
            }
            // The item that the user wants to make
            const endItem = await Item.findOne({ _id: itemId });
            const buildQty = 1;
            const endIngredients = [...endItem.recipe];
            // Check to see if endItem has any ingredients
            if (endIngredients.length === 0) {
                ungroupedRawArray.push({ itemId: itemId, qty: buildQty });
            } else {
                for (let index = 0; index < endIngredients.length; index++) {
                    // Calling the recursive function to populate ungroupedRawArray
                    await recursiveList(endIngredients[index]);
                }
            }

            // An empty array to store consolidated raw materials
            const groupedRawArray = [];

            ungroupedRawArray.forEach(element => {
                // Find function to see if ingredient is already in grouped
                function onList(ingredient) {
                    return ingredient.itemId.toString() === element.itemId.toString();
                }
                const foundIndex = groupedRawArray.findIndex(onList);
                // If the element is already in the grouped array, get the quantity of it, add it to the current element qty, splice it out of groupedRawArray, and then push a new ingredient object with the updated quantity to the groupedRawArray
                if (foundIndex !== -1) {
                    const foundId = groupedRawArray[foundIndex].itemId;
                    const foundQty = groupedRawArray[foundIndex].qty;
                    const elementQty = element.qty;
                    // console.log(`found qty ${foundQty} elementQty ${elementQty}`);
                    const newQty = foundQty + elementQty;
                    groupedRawArray.splice(foundIndex, 1);
                    groupedRawArray.push({ itemId: foundId, qty: newQty });
                    // If it's not found, push the ingredient to the groupedRawArray
                } else {
                    groupedRawArray.push({ itemId: element.itemId, qty: element.qty });
                }
            });

            const newList = await List.create({
                name: name,
                userId: userId,
                ingredients: groupedRawArray
            })
            return newList;
        }
    }
};

module.exports = resolvers;
