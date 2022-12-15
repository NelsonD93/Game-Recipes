const { Schema, model, Types } = require('mongoose');
const ingredientSchema = require('./Ingredient');

const listSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        },
        ingredients: [ingredientSchema],
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    }
)

const List = model('list', listSchema);

module.exports = List;