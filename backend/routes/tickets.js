const r = require('express').Router();
const { requireAuth } = require('../middleware/auth');
const { createTicket, listTickets, getTicket, updateTicket } = require('../controllers/ticketsController');
r.use(requireAuth);
r.get('/', listTickets);
r.post('/', createTicket);
r.get('/:id', getTicket);
r.patch('/:id', updateTicket);
module.exports = r;
