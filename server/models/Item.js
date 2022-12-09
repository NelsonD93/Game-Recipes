const {Schema, Model, Types} = require('mongoose');
const gameSchema = require('./Game')

const itemSchema = new Schema(
    {
        itemId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
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

        },
        itemRecipe: [
            
        ]
    }
)