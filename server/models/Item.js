const {Schema, Model, Types} = require('mongoose');
const gameSchema = require('./Game')

const itemSchema = new Schema(
    {
        itemId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
            required: true
        },
        itemName: {
            type: String,
            required: true
        },
        itemDescription: {
            type: String,
            required: true
        },
        gameId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
            required: true
        },
        itemRecipe: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Ingredient',
            }
        ]
    }
)

const Item = model('item', itemSchema);

module.exports = Item;