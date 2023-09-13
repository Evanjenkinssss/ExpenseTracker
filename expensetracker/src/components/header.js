// Header.js
import React from 'react';
import './header.css'; 


function Header() {
  return (
    <header className='headercontent'>
      <h1>Expense Tracker</h1>
      <div>
        <ul className='menu'>
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
    </header>
    
  );
}

export default Header;