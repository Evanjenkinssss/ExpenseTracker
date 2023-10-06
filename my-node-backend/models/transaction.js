// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  company: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);