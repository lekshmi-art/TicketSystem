const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email:{ type:String, required:true, unique:true, index:true },
  passwordHash:{ type:String, required:true },
  role:{ type:String, enum:['REQUESTER','STAFF','MANAGER'], default:'REQUESTER', index:true }
},{ timestamps:true });

UserSchema.methods.setPassword = async function(pw){ this.passwordHash = await bcrypt.hash(pw,10); };
UserSchema.methods.comparePassword = function(pw){ return bcrypt.compare(pw, this.passwordHash); };

module.exports = model('User', UserSchema);
