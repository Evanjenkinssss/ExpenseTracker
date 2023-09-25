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
            <div className="row">
                <label>
                    Date
                </label>
                <div className="input">
                <input type="date" name="date" value={formData.date}/>
                </div>
            </div>

            <div className="row">
                <label>
                    Company
                </label>
                <div className="input">
                <input type="text" name="company" value={formData.company}/>
                </div>
            </div>
              
            <div className="row">
                <label>
                    Description
                </label>
                <div className="input">
                <input type="text" name="description" value={formData.description}/>
                </div>
            </div>
            
            <div className="row">
                <label>
                    Category
                </label>
                <div className="input">
                <select name="category" value={formData.category}>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    {/* Add more category options as needed */}
                </select>
                </div>
                
            </div>
            
            <div className="row">
                <label>
                    Amount
                </label>
                <div className="input">
                <input type="number" name="amount" value={formData.amount}/>
                </div> 
            </div>
            
              {/* Add more form fields as needed */}
              <div className="buttons">
                <button className="close-button" onClick={onClose}>Close</button>
                <button class="submit-button" type="submit">Submit</button>
              </div>
              
            </form>
            
          </div>
        </div>
      );
    
}



export default TransactionForm;
