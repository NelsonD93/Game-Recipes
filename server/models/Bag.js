const { Schema, Types, model } = require('mongoose');
const ingredientSchema = require('./Ingredient');
const userSchema = require('./User')

const bagSchema = new Schema(
    {
        gameId: {
            type: Schema.Types.ObjectId,
        }, 
        userId: {
            type: Schema.Types.ObjectId,
        },
        ingredients: [ingredientSchema]
        
    }
)

const Bag = model('bag', bagSchema);

module.exports = Bag;