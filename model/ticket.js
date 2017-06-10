'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = Schema({
  residentID: { type: Scema.Types.ObjectId, required: true },
  ticket: {type: Object, required: true }
});

module.exports = mongoose.model('ticket', ticketSchema);
