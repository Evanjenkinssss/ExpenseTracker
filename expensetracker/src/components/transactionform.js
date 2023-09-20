import React, { useState } from 'react';
import './transactionform.css'; 



const TransactionForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
      // Initialize your form fields here
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      // You can also send data to a parent component using props
    };


    return (
        <div className="overlay">
          <div className="formcontainer">
            
            <form onSubmit={handleSubmit}>
              {/* Your form fields */}
            <div class="row">
                <label>
                    Date
                </label>
                <div class="input">
                <input type="date" name="date" value={formData.date}/>
                </div>
            </div>

            <div class="row">
                <label>
                    Company
                </label>
                <div class="input">
                <input type="text" name="company" value={formData.company}/>
                </div>
            </div>
              
            <div class="row">
                <label>
                    Description
                </label>
                <div class="input">
                <input type="text" name="description" value={formData.description}/>
                </div>
            </div>
            
            <div class="row">
                <label>
                    Category
                </label>
                <div class="input">
                <select name="category" value={formData.category}>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    {/* Add more category options as needed */}
                </select>
                </div>
                
            </div>
            
            <div class="row">
                <label>
                    Amount
                </label>
                <div class="input">
                <input type="number" name="amount" value={formData.amount}/>
                </div> 
            </div>
            
              {/* Add more form fields as needed */}
              <div class="buttons">
                <button className="close-button" onClick={onClose}>Close</button>
                <button class="submit-button" type="submit">Submit</button>
              </div>
              
            </form>
            
          </div>
        </div>
      );
    
}



export default TransactionForm;
