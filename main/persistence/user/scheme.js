'use strict';

module.exports = function(mongoose){
  return new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      default: ""
    },
    email: {
      type: String,
      trim: true,
      default: ""
    },
    password: {
      type: String,
      trim: true,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    },
    created: {
      type: Date,
      default: Date.now
    }
  });
}