// maindisplay.js
import React from 'react';
import './maindisplay.css'; 

import { UserData } from "./data";
import LineChart from "./Mainlinechart";
import { useState } from "react";





function Maindisplay() {




  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
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


        {/* Graph Display */}

        <div class="maindisplaycontent">

            <p> Testing </p>
            <LineChart chartData={userData} />
        </div>

        {/* Nav Display */}
        <div class="navdisplaycontent">

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

        <div class="transactionsdiv">
        <h1> Transactions </h1>
        <div class="transactions">
        <p>transaction1</p>
        </div>
        <div class="buttondiv">
        
        <button class="newButton">Add New</button>
        </div>
        </div>
    </body>
    
  );
}

export default Maindisplay;