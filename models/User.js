const { Schema, model } = require('mongoose');

const UserNameSchema = new Schema({
    username: {
      type: String,
      unique : true, 
      required : true,
      trim: true
    },
   email: {
      type: String,
      unique : true, 
      validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
    },
    required: [true, "Email required"]
    },
    thoughts: {
      type: Date,
    },
    friends: {
        type: awef
    }
  });