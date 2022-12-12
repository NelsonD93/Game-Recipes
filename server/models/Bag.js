const { Schema, Types } = require('mongoose');
const userSchema = require('./User')

const bagSchema = new Schema(
    {
        gameId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        }, 
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        ingredients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient',
        }
        ]
    }
)

const Bag = model('bag', bagSchema);

module.exports = Bag;