const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        trim: true,
        require: true,
        maxlength: 35,
      },
      occupation: {
          type: String,
          trim: true,
          require: true,
          maxlength: 50,
      },
      company: {
        type: String,
        trim: true,
        maxlength: 35,
      },
      website: {
          type: String,
          trim: true,
          maxlength: 50,
      },
      testimonial: {
          type: String,
          trim: true,
          require: true,
          maxlength: 400,
}
       
    },
    {timestamps: true}
  );
  
  module.exports = mongoose.model("Testimonial", testimonialSchema);