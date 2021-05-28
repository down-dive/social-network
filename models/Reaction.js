const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const ReactionsSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280      },
    username: {
        type: String,
        required: true,   
       },
        createdAt: {
          type: Date,
          default: Date.now,
          get: createdAtVal => dateFormat(createdAtVal)
      },
},
{
  toJSON: {
      getters: true,
      },
}
  );

const Reaction = model('Reaction', ReactionsSchema);

module.exports = Reaction;