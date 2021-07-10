const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 150,
      required: true,
    },
    description: {
        type: String,
        trim: true,
        minlength: 20,
        maxlength: 150,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true,
    },
    shipping: {
        type: Boolean,
        default: false,
        required: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
