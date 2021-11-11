const JWT = require('jsonwebtoken')
const User = require("../models/User");
const _= process.env
const DBError = require('../utils/DBError')

exports.signin = async (req, res) => {

  try {
    const user = await User.findById(req.userId);

    console.log('el user: '+user)

    const {_id, username, role} = user

    const token = JWT.sign({ id: _id },_.JWT_SECRET, {
        expiresIn: _.JWT_EXPIRES // 24 hours
      });

     //res.setHeader('x-access-token', token) 
    await res.cookie('lizzethJWT', token, {httpOnly: true, sameSite:true})     
     //res.cookie('lizzethJWT', token, {httpOnly: true, sameSite:true})
     await res.status(200).json({isAuthenticated : true, user : {username, role}});
     
     console.log("LOGIN!!!!!!!!!!");
  
  } catch (err) {
      console.log('error de login: '+err.message);
  }

}

exports.signout = async (req, res) => {
  //console.log(req.headers["x-access-token"])
    //req.headers["x-access-token"] = '';  
    await res.clearCookie('lizzethJWT');
    await res.json({user:{username : "", role : ""},success : true})
    console.log("LOGOUT!!!!!!!!!!");
}

exports.signup = async (req,res) => {
    const {username, password, role} = req.body
  
    try { 
      const newUser = new User({
        username,
        password: await User.encryptPassword(password),
        role
      });

      await newUser.save();
  
      const token = JWT.sign({ id: newUser._id }, _.JWT_SECRET, {
        expiresIn: _.JWT_EXPIRES, // 24 hours
      });
      console.log(newUser)
      return res.status(200).json({ token });
     
      
    }catch (err) {
    console.log(err.name+': '+err.message )
    let errorHandled = err
    err.name==='MongoError' ? errorHandled = DBError(err) : errorHandled
    res.status(401).json(errorHandled.message)
    }
  }


