const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: Boolean,
    required: true,
    trim: true,
  },
  type: { type: String, required: true, trim: true },
  address:[{
    country:{
        type: String,
        trim: true
    },
    house_name:{
        type: String,
        trim: true  
    },
town:{ type: String,
    trim: true 
 } ,
 district:{
  type: String,
  trim: true  
},
 state:{
    type: String,
    trim: true  
},
post_code:{
    type: String,
    trim: true 
} 
}]   ,
});
userSchema.plugin(validator);
const User = mongoose.model("User", userSchema);
module.exports = User;
