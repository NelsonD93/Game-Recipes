const { Schema, model, Types } = require('mongoose');
const ingredientSchema = require('./Ingredient');

const buildSchema = new Schema({
    itemId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    ingredients: [ingredientSchema]
});


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
        },
        buildStack: [buildSchema],
    }
)

const List = model('list', listSchema);

module.exports = List;