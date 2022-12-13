const { Schema, model } = require('mongoose');

const ingredientSchema = new Schema({
    itemId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});

module.exports = ingredientSchema;