const express = require('express')
const router = express.Router()
const authController =require('../controllers/authController')
const middelware =require('../middelwares/authJWT')


router.use((req, res, next) => 
{res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-Type, Accept");
  next();
}); 

router.post('/signin', authController.signin)

router.get('/signout', authController.signout)

router.post('/signup', authController.signup)

router.get('/authenticated', middelware.verifyToken, middelware.authenticated )

module.exports= router