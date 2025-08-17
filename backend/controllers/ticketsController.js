const Ticket = require('../models/Ticket');
const SLA = require('../models/SLA');

async function dueFromSLA(priority, createdAt){
  const rule = await SLA.findOne({ priority });
  if(!rule) return null;
  return new Date(createdAt.getTime() + rule.targetHours * 3600 * 1000);
}

exports.createTicket = async (req,res)=>{
  const { title, description, priority='MEDIUM' } = req.body;
  const dueAt = await dueFromSLA(priority, new Date());
  const t = await Ticket.create({ title, description, priority, requester:req.user.sub, dueAt });
  res.status(201).json(t);
};

exports.listTickets = async (req,res)=>{
  const { status, priority, q } = req.query;
  const filter = {};
  if(status) filter.status = status;
  if(priority) filter.priority = priority;
  if(q) filter.title = { $regex:String(q), $options:'i' };
  if(req.user.role === 'REQUESTER') filter.requester = req.user.sub;
  const items = await Ticket.find(filter).sort({ updatedAt:-1 }).limit(100);
  res.json(items);
};

exports.getTicket = async (req,res)=>{
  const t = await Ticket.findById(req.params.id);
  if(!t) return res.status(404).json({message:'Not found'});
  res.json(t);
};

exports.updateTicket = async (req,res)=>{
  const t = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new:true });
  res.json(t);
};
