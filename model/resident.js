'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const residentSchema = Schema({
  name: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  userID: { type: Schema.Types.ObjectId, required :true, unique: true }
});

module.exports = mongoose.model('resident', residentSchema);
