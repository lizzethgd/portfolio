const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        require: true,
        maxlength: 45,
    },
    phone: {
        type: Number,
        trim: true,
        maxlength: 20,
      }, 
  },
  {timestamps: true}
);

module.exports = mongoose.model("Contact", contactSchema);