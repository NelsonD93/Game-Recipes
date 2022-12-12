const { Schema, model } = require('mongoose');
const userSchema = require('./User')

const gameSchema = new Schema(
    {
        name: {
            type: String,
            required: true,

        },
        admins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
        ],

    }
)

const Game = model('game', gameSchema);

module.exports = Game;