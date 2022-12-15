const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema({
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
    onHand: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = ingredientSchema;