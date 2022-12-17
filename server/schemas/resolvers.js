const { AuthenticationError } = require('apollo-server-express');

const { Bag, Game, Item, List, User } = require('../models');

// import sign token function from auth
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getGames: async (parent) => {
            return Game.find({})
        },
        getOneItem: async (parent, { itemId }) => {
            return Item.findOne({ _id: itemId })
        },
        getGameItems: async (parent, { gameId }, context) => {
            return Item.find({ gameId: gameId })
        },
        getBag: async (parent, { gameId, userId }, context) => {
            return Bag.findOne({ gameId: gameId, userId: userId })
        },
        getOneUser: async (parent, { userId }, context) => {
            return User.findOne({ _id: userId }).populate('lists');
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('lists');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        getList: async (parent, { listId }) => {
            return List.findOne({ _id: listId });
        },
        getUsers: async () => {
            return User.find({})
        },
        getLists: async (parent) => {
            return List.find({});
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
        subToGame: async (parent, { gameId }, context) => {
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

        buildList: async (parent, { itemId, name, userId, buildQty }) => {
            // Starting array of raw materials. Ingredient objects will be added to it via recursiveList function. Ingredients will need to be grouped by name/id after and quantities added together. Populated by Ingredient objects.
            const ungroupedRawArray = [];
            // Stack of items to build. Build items will be unshifted onto it and later shifted off. Populated by Ingredient objects.
            const buildStack = [];
            // Recursive function to push ingredients onto ungroupedRawArray
            const recursiveList = async (ingredient) => {
                const buildItem = await Item.findOne({ _id: ingredient.itemId });
                const listArray = [...buildItem.recipe];
                const itemName = buildItem.name;
                // If the build item has no ingredients, push it to the ungroupedRawArray 
                if (listArray.length === 0) {
                    const pushObject = {
                        itemId: ingredient.itemId,
                        itemName: itemName,
                        qty: ingredient.qty
                    };
                    ungroupedRawArray.push(pushObject);
                    return;
                } else {
                    // If the build item has ingredients, unshift it to the build stack and make a recursive call for each indgredient
                    buildStack.unshift({
                        itemId: ingredient.itemId,
                        itemName: itemName,
                        qty: ingredient.qty,
                        ingredients: listArray
                    });
                    for (let index = 0; index < listArray.length; index++) {
                        const element = listArray[index];
                        await recursiveList({
                            itemId: element.itemId,
                            itemName: element.itemName,
                            qty: element.qty * ingredient.qty
                        });
                    }
                }
            }
            // The item that the user wants to make
            const endItem = await Item.findOne({ _id: itemId });
            console.log(endItem)
            const endIngredients = [...endItem.recipe];
            const endName = endItem.name;
            buildStack.unshift({
                itemId: itemId,
                itemName: endName,
                qty: buildQty,
                ingredients: endIngredients
            });
            // Check to see if endItem has any ingredients
            if (endIngredients.length === 0) {
                ungroupedRawArray.push({
                    itemId: itemId,
                    itemName: endName,
                    qty: buildQty
                });
            } else {
                for (let index = 0; index < endIngredients.length; index++) {
                    // Calling the recursive function to populate ungroupedRawArray
                    const ingredientQty = endIngredients[index].qty * buildQty;
                    await recursiveList({
                        itemId: endIngredients[index].itemId,
                        itemName: endIngredients[index].itemName,
                        qty: ingredientQty
                    });
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
                    const foundName = groupedRawArray[foundIndex].itemName;
                    const foundQty = groupedRawArray[foundIndex].qty;
                    const elementQty = element.qty;
                    // console.log(`found qty ${foundQty} elementQty ${elementQty}`);
                    const newQty = foundQty + elementQty;
                    groupedRawArray.splice(foundIndex, 1);
                    groupedRawArray.push({
                        itemId: foundId,
                        itemName: foundName,
                        qty: newQty
                    });
                    // If it's not found, push the ingredient to the groupedRawArray
                } else {
                    groupedRawArray.push({
                        itemId: element.itemId,
                        itemName: element.itemName,
                        qty: element.qty
                    });
                }
            });

            const newList = await List.create({
                name: name,
                userId: userId,
                ingredients: groupedRawArray,
                buildStack: buildStack
            })
            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                {
                    $addToSet: {
                        lists: newList._id
                    }
                },
                { new: true, runValidators: true }
            );
            return newList;
        },

        // Update the on hand quantities in the ingredients list with input values from the user. onHandUpdate is an ingredients array constructed on the client side.
        updateOnHand: async (parent, { listId, onHandUpdate }, context) => {
            const listToUpdate = await List.findOne({ _id: listId });
            const updatedList = await List.findOneAndReplace(
                { _id: listId },
                {
                    userId: listToUpdate.userId,
                    name: listToUpdate.name,
                    completed: listToUpdate.completed,
                    ingredients: onHandUpdate,
                    buildStack: listToUpdate.buildStack
                },
                { new: true, runValidators: true }
            );
            return updatedList;
        }
    },
};

module.exports = resolvers;
