const mongoose = require(`mongoose`);
const validator = require(`validator`);
const bcrypt = require(`bcryptjs`);

const userSchema=mongoose.Schema({
  hi:{
    isString:true
  },
  validate:{
    validator.isEmail(),
    message:`{VALUE} is not an email`
  }
})

userSchema.pre(`save`,function(next){
  const User = this;
  if(User.isModified(`password`){
    bcrypt.hash(User.password,5)
    .then(hashedpassword=>{
      User.password=hashedpassword;
      next();
    }).catch(e=>{
      console.log("unable to hash password");
      next();
    })
  }
})
const User = mongoose.model(`User`,userSchema)

module.exports = User;
