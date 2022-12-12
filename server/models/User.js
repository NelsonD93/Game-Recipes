const { Schema, model, Types } = require('mongoose');
const gameSchema = require('./Game');
const bagSchema = require('./Bag');
const listSchema = require('./List')
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']
            // Regex found here: https://gist.github.com/rupeshtiwari/acf770bfc85f3fe1f62a80b461abfc13
        },
        password: {
            type: String,
            required: true,
            // hashing logic
        },
        games: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Game',
            }
        ],
        bags: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Bag',
            }
        ],
        lists: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }

        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
)

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;