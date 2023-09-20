// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});