const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const Thought = require('./Thought');


const UserNameSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function(value) {
                return isEmail(value);
              },
              message: 'You must give a valid email address'
            },
            required: 'You must provide an email address'
          },
          thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought'
            }
          ],
    friends: {
        // _id values referencing the User model (self-reference)

    }
});

const User = model('User', UserNameSchema);

module.exports = User;