var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")
mongoose.connect('mongodb://localhost:27017/authtesting')
const userSchema = new mongoose.Schema({  
  name: {  
      type: String,  
      required: true  
  },  
  email: {  
      type: String,  
      required: true,  
      unique: true  
  },  
  age: {  
      type: Number,  
      min: 0  
  }  
});  
userSchema.plugin(plm);
module.exports = mongoose.model('user', userSchema);  


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
