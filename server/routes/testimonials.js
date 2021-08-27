const {Router} = require("express");
const router = Router()
const Testimonial= require('../models/Testimonial');

router.post('/send', async (req,res,next) => {
    const {name, occupation, company, website, testimonial} = req.body

    Testimonial.create(req.body)
    .then(function(testimonial){
        res.send(testimonial)
    }).catch(next)
    

})
  

module.exports = router
