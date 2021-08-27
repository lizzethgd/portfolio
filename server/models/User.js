const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username :{
        type : String,
        required: [true, "User is required"],
        lowercase: true,
        unique: true,
        minlength : 4,
        maxlength : 15
    },
    password : {
        type : String,
        required: [true, "Password is required"],
        minlength: 6
    },
    role : {
        type : String,
        enum: {
            values: ["guest", "moderator", "admin"],
          },
        default: "guest",
    },
},  
{timestamps: true,
    versionKey: false});

UserSchema.statics.encryptPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}    

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }


module.exports = mongoose.model('User',UserSchema);