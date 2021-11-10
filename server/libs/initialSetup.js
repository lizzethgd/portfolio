const User = require("../models/User")
const bcrypt =require("bcrypt")

exports.createAdmin = async () => {
    // check for an existing admin user
    const user = await User.findOne({ username: "admin" });
    //console.log(user)

    // get roles _id
    //const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });
  
    if (!user) {
      // create a new admin user
      await User.create({
        username: "admin",
        password: await bcrypt.hash("gatito", 10),
        role: 'admin',
      });
      console.log('Admin User Created!')
    }
  };