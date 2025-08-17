const { Schema, model } = require('mongoose');
const SLASchema = new Schema({
  name:{ type:String, required:true },
  priority:{ type:String, enum:['LOW','MEDIUM','HIGH','CRITICAL'], required:true, index:true },
  targetHours:{ type:Number, required:true }
},{ timestamps:true });
module.exports = model('SLA', SLASchema);
