const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../config/env');

exports.register = async (req,res)=>{
  const { name, email, password, role } = req.body;
  const u = new User({ name, email, role });
  await u.setPassword(password);
  await u.save();
  res.status(201).json({ id: u._id });
};

exports.login = async (req,res)=>{
  const { email, password } = req.body;
  const u = await User.findOne({ email });
  if(!u || !(await u.comparePassword(password))) return res.status(401).json({message:'Bad creds'});
  const token = jwt.sign({ sub:u._id, role:u.role, email:u.email }, JWT_SECRET, { expiresIn:'2h' });
  res.json({ token, role:u.role, name:u.name });
};
