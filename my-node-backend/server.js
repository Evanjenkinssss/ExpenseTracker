// server.js
const express = require('express');
const mongoose = require('mongoose');
const Transaction = require('./models/transaction');
const cors = require('cors'); // Import the cors package


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


app.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual URL of your React app
}));

app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API');
});

// Define an API route to retrieve all transactions
app.get('/api/transactions', async (req, res) => {
    console.log('initiated get');
    try {
      console.log('initiated try');
      // Fetch all transactions from the database
      const transactions = await Transaction.find();
      console.log('Fetched transactions:', transactions);

      // Set the Content-Type header to indicate JSON response
      res.setHeader('Content-Type', 'application/json');
      console.log('Response headers before sending:', res.getHeaders());

      // Send the transactions as a JSON response
      res.json(transactions);

    } catch (error) {
      console.error('Error fetching transactions:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/test', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ message: 'Test JSON response' });
  });


///

app.use(express.json()); // Middleware to parse JSON requests

// Define an API route to create a new transaction
app.post('/api/transactions', async (req, res) => {
  try {
    console.log('Received transaction data:', transactionData);
    // Get the transaction data from the request body
    const transactionData = req.body;

    // Create a new Transaction document based on the data
    const newTransaction = new Transaction(transactionData);

    // Save the new transaction to the database
    await newTransaction.save();
    console.log('Transaction saved successfully');
    // Send a success response
    res.status(201).json({ message: 'Transaction saved successfully' });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


////

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




////



