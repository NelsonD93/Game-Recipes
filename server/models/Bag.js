const { Schema, Types } = require('mongoose');

const bagSchema = new Schema(
    {
        bagId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        gameId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        }, // Unsure about gameId?
        userId: {

        },
        bagIngredients: [
            
        ]
    }
)