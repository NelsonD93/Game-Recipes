const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        gameId: {
        
        },
        gameName: {
            type: String,
            required: true,

        },
        gameAdmins: [

        ],

    }
)