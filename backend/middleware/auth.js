const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

function requireAuth(req,res,next){
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({message:'Missing token'});
  try{ req.user = jwt.verify(token, JWT_SECRET); next(); }
  catch{ res.status(401).json({message:'Invalid token'}); }
}
function requireRole(...roles){
  return (req,res,next)=> roles.includes(req.user.role) ? next() : res.status(403).json({message:'Forbidden'});
}
module.exports = { requireAuth, requireRole };
