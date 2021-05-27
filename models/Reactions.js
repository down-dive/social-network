const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const ReactionsSchema = new Schema({
    reactionId: {
        type: ObjectId,
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
}
  );

const Reactions = model('Reactions', ReactionsSchema);

module.exports = Reactions;