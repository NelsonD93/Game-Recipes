const {Schema, Model, Types} = require('mongoose');
const gameSchema = require('./Game')

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
        recipe: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Ingredient',
            }
        ]
    }
)

const Item = model('item', itemSchema);

module.exports = Item;