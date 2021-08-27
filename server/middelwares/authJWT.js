const JWT = require('jsonwebtoken')
const User= require('../models/User')
const _= process.env

exports.verifyToken = async (req, res, next) => {
    
     const token=  req.cookies['lizzethJWT']

    if (!token) return res.status(403).json({ message: "No token provided" });

 try {
      const decoded = JWT.verify(token, _.JWT_SECRET);
      console.log(decoded)
      req.userId = decoded.id;
  
      const user = await User.findById(req.userId, { password: 0 });

      
      if (!user) return res.status(404).json({ message: "No user found" });

            
      //const username=userFound.username, role=userFound.role
     
     //return res.status(200).json({isAuthenticated : true, user : {username, role}});
    
      next();
    
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized!, Error: " +error.message });
    } 
};

exports.isAdmin = async (req, res, next) => {
 
  try {
    const user = await User.findById(req.userId);
    const role = user.role

      if (role === "admin") {
        console.log('es admin')
        next();
        return; 
    }

    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

exports.blackList = (...inputs) => {
    return (req, res, next) => {
      const { body } = req;
      let bodyProps;
      for (let prop in inputs) {
        bodyProps = inputs[prop];
        if (body[bodyProps]) delete body[bodyProps];
      }
      next();
    };
};

exports.authenticated = async (req,res)=>{
  const user = await User.findById(req.userId);
  const username= user.username
  const role = user.role
  try {   
  await res.status(200).json({isAuthenticated : true, user : {username,role}});
  
}catch (err) {console.log('error: '+err.message)}
 
}
  
/*   export const isModerator = async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);
      const roles = await Role.find({ _id: { $in: user.roles } });
  
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
          next();
          return;
        }
      }
  
      return res.status(403).json({ message: "Require Moderator Role!" });
    } catch (error) {
      console.log(error)
      return res.status(500).send({ message: error.message });
    }
  }; */
  
  