const JWT = require('jsonwebtoken')
const User = require("../models/User");
const _= process.env
const DBError = require('../utils/DBError')

exports.signin = async (req, res) => {
    const {username, password} = req.body
    console.log('primero: '+req.body)
    
    try {
        const userFound = await User.findOne({ username})
        console.log(userFound)
        
        if (!userFound) return res.status(400).json({ message: "User Not Found" });

        const matchPassword = await User.comparePassword(password, userFound.password);
    
        if (!matchPassword)
          return res.status(401).json({
            token: null,
            message: "Invalid Password",
          });

      const token = JWT.sign({ id: userFound._id },_.JWT_SECRET, {
          expiresIn: 86400 // 24 hours
        });

        //const username=userFound.username, role=userFound.role

       //res.setHeader('x-access-token', token) 
        res.cookie('lizzethJWT', token) 
        res.json({ token })    
       //res.cookie('lizzethJWT', token, {httpOnly: true, sameSite:true})
       //res.json({message: 'Signin succes', your_token: token, user: userFound })
       console.log("LOGIN!!!!!!!!!!");
    
    } catch (err) {
        console.log(err);
    }

}

exports.signout = async (req, res) => {
  //console.log(req.headers["x-access-token"])
    //req.headers["x-access-token"] = '';  
    res.clearCookie('lizzethJWT');
    res.json({user:{username : "", role : ""},success : true})
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
    console.log(err.name)
    let errorHandled = err
    err.name==='MongoError' ? errorHandled = DBError(err) : errorHandled
    res.status(401).json(errorHandled.message)
    }
  }


