const { Schema, model, Types } = require('mongoose');
const TicketSchema = new Schema({
  title:{ type:String, required:true, trim:true },
  description:{ type:String, default:'' },
  status:{ type:String, enum:['OPEN','IN_PROGRESS','ON_HOLD','RESOLVED','CLOSED'], default:'OPEN', index:true },
  priority:{ type:String, enum:['LOW','MEDIUM','HIGH','CRITICAL'], default:'MEDIUM', index:true },
  requester:{ type:Types.ObjectId, ref:'User', required:true, index:true },
  assignee:{ type:Types.ObjectId, ref:'User' },
  sla:{ type:Types.ObjectId, ref:'SLA' },
  dueAt:{ type:Date },
  closedAt:{ type:Date },
  atRisk:{ type:Boolean, default:false }
},{ timestamps:true });
module.exports = model('Ticket', TicketSchema);
