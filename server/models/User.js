const { Schema, model, Types} = require('mongoose');

const userSchema = new Schema(
    {
        userId: {

        },
        userName: {
            type: String,
            required: true
        },
        userEmail: {
            type: String,
            required: true
            // validators here?
        },
        userPW: {
            type: String,
            required: true,
            // hashing logic
        },
        userGames: [

        ],
        userBags: [
            
        ]
    }
)