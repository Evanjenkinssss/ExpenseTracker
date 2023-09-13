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
        label: "Users Gained",
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
        <div class="maindisplaycontent">

            <p> Testing </p>
            <LineChart chartData={userData} />



        </div>
    </body>
    
  );
}

export default Maindisplay;