const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
        required: true,    },
    reactionss: {
        // Array of nested documents created with the reactionSchema
    }
},
{
    toJSON: {
      getters: true
    },
  }
  );

const User = model('User', UserNameSchema);

module.exports = User;