const { Schema, model } = require('mongoose');
const userSchema = require('./User')

const gameSchema = new Schema(
    {
        gameId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
            required: true
        },
        gameName: {
            type: String,
            required: true,

        },
        gameAdmins: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
        ],

    }
)

const Game = model('game', gameSchema);

module.exports = Game;