const { Schema, model, Types } = require('mongoose');

const listSchema = new Schema(
    {
        listId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
            required: true
        },
        listName: {
            type: String,
            required: true
        },
        listUserId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
            required: true
        },
        listIngredients: [
        {

        }
        ]
    }
)

const List = model('list', listSchema);

module.exports = List;