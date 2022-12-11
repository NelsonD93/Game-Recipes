const { Schema, model, Types } = require('mongoose');
const gameSchema = require('./Game');
const bagSchema = require('./Bag');
const listSchema = require('./List')

const userSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        userName: {
            type: String,
            required: true
        },
        userEmail: {
            type: String,
            required: true,
            match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']
            // Regex found here: https://gist.github.com/rupeshtiwari/acf770bfc85f3fe1f62a80b461abfc13
        },
        userPW: {
            type: String,
            required: true,
            // hashing logic
        },
        userGames: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Game',
            }
        ],
        userBags: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Bag',
            }
        ],
        userLists: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }

        ]
    }
)

const User = model('user', userSchema);

module.exports = User;