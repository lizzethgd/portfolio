const {Router} = require("express");
const router = Router()
const tmlsController = require('../controllers/tmlsController')

router.post('/', tmlsController.sendTestimonial)

router.get('/', tmlsController.getTestimonials)

module.exports = router