const { Schema, model, Types } = require('mongoose');

const listSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
            required: true
        },
        ingredients: [
        {

        }
        ]
    }
)

const List = model('list', listSchema);

module.exports = List;