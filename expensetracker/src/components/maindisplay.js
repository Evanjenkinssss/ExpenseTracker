// maindisplay.js
import React from 'react';
import './maindisplay.css'; 

import { UserData } from "./data";
import LineChart from "./Mainlinechart";
import { useState, useEffect } from "react";

import TransactionForm from './transactionform';






function Maindisplay() {

  const [transactions, setTransactions] = useState([]); // State to hold fetched transactions


  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  }

  // Define a function to fetch transactions
  async function fetchTransactions() {
    try {
      console.log('Fetching transactions...'); // Log when the request is initiated
      const response = await fetch('http://localhost:5001/api/transactions'); // Replace with the correct server URL
      console.log('Response Content-Type:', response.headers.get('Content-Type'));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Response received with status:', response.status); // Log the response status

      const data = await response.json();
      console.log('Data received:', data); // Log the received data
      setTransactions(data);
      console.log('Transactions set successfully.'); // Log when the data is set

    } catch (error) {
      console.error('Error! fetching transactions:', error);
    }
  }

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchTransactions();
  }, []);





  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "£ Spent",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    
    <body>

        {showForm && <TransactionForm onClose={handleFormToggle} />}

        {/* Graph Display */}

        <div className="maindisplaycontent">

            <p> Testing </p>
            <LineChart chartData={userData} />
        </div>

        {/* Nav Display */}
        <div className="navdisplaycontent">

        <ul className='navDisplay'>
            <li>
                <a href="#">Test</a>
            </li>
            <li>
                <a href="#">Test</a>
            </li>
            <li>
                <a href="#">Test</a>
            </li>
            <li>
                <a href="#">Test</a>
            </li>
        </ul>

        </div>

        {/* Transactions Display */}

        <div className="transactionsdiv">
        <h1> Transactions </h1>
        <div className="transactions">
        {transactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <p>Company: {transaction.company}</p>
              <p>Amount: {transaction.amount}</p>
            </div>
            
          ))}
        </div>
        <div className="buttondiv">
        
        <button onClick={handleFormToggle}className="newButton">Add New</button>
        </div>
        </div>
    </body>
    
  );
}

//




//

export default Maindisplay;