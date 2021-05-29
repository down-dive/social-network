const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const Reaction = require('./Reaction')

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
    reactions: {
        type: Array
    }
},
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

ThoughtsSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtsSchema);

module.exports = Thought;


// var reactionArray = new Reaction([a, 1, 2, 3, 4, 5])
// var newThought = new ThoughtsSchema(test, created, name, reactionArray)