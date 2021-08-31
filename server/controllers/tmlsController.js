const Testimonial = require("../models/Testimonial");

exports.sendTestimonial = async (req, res) => {
    const { name, occupation, company, website, testimonial} = req.body;
  
    try {
      const newTestimonial = new Testimonial({
        name,
        occupation,
        company,
        website,
        testimonial
      });
  
      const testimonialSaved = await newTestimonial.save();
  
      res.status(201).json(testimonialSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

exports.getTestimonials = async (req, res) => {
    const testimonials = await Testimonial.find();
    return res.json(testimonials);
  };