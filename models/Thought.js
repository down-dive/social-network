const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Reactions = require('./Reaction')

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        Reactions
    ]
},
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;