const { connectDB } = require('../src/config/db');
const { MONGO_URI } = require('../src/config/env');
const User = require('../src/models/User');

(async ()=>{
  await connectDB(MONGO_URI);
  const email = 'manager@demo.com';
  if(await User.findOne({ email })) { console.log('exists:', email); process.exit(0); }
  const u = new User({ name:'Manager', email, role:'MANAGER' });
  await u.setPassword('Manager@123');
  await u.save();
  console.log('created:', email);
  process.exit(0);
})();
