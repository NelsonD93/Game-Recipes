const {Schema, model, Types} = require('mongoose');
const gameSchema = require('./Game');
const ingredientSchema = require('./Ingredient');

const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        gameId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        recipe: [ingredientSchema]
    }
)

const Item = model('item', itemSchema);

module.exports = Item;