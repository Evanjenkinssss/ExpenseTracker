// models/Transaction.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  date: Date,
  company: String,
  description: String,
  category: String,
  amount: Number,
});

module.exports = mongoose.model('Transaction', transactionSchema);