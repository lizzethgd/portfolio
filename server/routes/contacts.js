const {Router} = require("express");
const router = Router()
const contactController= require('../controllers/contactController');

router.post('/', contactController.sendContact)
  

module.exports = router
