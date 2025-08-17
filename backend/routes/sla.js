const r = require('express').Router();
const { requireAuth, requireRole } = require('../middleware/auth');
const SLA = require('../models/SLA');
r.use(requireAuth, requireRole('MANAGER'));
r.get('/', async (_req,res)=> res.json(await SLA.find().sort({ priority:1 })));
r.post('/', async (req,res)=> res.status(201).json(await SLA.create(req.body)));
module.exports = r;
