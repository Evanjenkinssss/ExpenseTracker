// server.js
const express = require('express');
const mongoose = require('mongoose');
const Transaction = require('./models/transaction');


const app = express();
const PORT = process.env.PORT || 5001;

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/ExpenseTrackerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Define your API routes here
// Example: app.use('/api/users', require('./routes/users'));





// Define an API route to retrieve all transactions
app.get('/api/transactions', async (req, res) => {
    try {
      // Fetch all transactions from the database
      const transactions = await Transaction.find();
  
      // Send the transactions as a JSON response
      res.json(transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });





////

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




////



