const mongoose = require("mongoose");
const crypto = require("crypto");
const { v1: uuidv1 } = require('uuid');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 8,
    maxlength: 80,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    minlength: 10,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    required: true,
    unique: true,
  },
  hashed_password: {
    type: String,
    //match: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    required: true,
  },
  salt: {
    type: String,
  },
  about: {
    type: String,
    trim: true,
  },
  role: {
    type: Number,
    default: 0,
  },
  history: {
    type: Array,
    default: [],
  },
}, {
  timestamps: true,
});

userSchema.virtual("password")
          .set(function(password) {
            this._password = password;
            this.salt = uuidv1();
            this.hashed_password = this.cryptPassword(password)
          })
          .get(function() {
            return this._password;
});

userSchema.methods = {
  cryptPassword: function (password) {
    if (!password) {
      return "";
    }
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);