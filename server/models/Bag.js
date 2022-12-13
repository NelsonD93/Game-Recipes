const { Schema, Types } = require('mongoose');
const ingredientSchema = require('./Ingredient');
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
        ingredients: [ingredientSchema]
        
    }
)

const Bag = model('bag', bagSchema);

module.exports = Bag;