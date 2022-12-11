const { Schema, Types } = require('mongoose');
const userSchema = require('./User')

const bagSchema = new Schema(
    {
        bagId: {
            // ID logic taken from Mongo mini-project, unsure if this is correct, and this goes for all ID's
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
            required: true
        },
        gameId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        }, 
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        bagIngredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient',
        }
        ]
    }
)

const Bag = model('bag', bagSchema);

module.exports = Bag;