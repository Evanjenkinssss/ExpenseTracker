import React, { useState } from 'react';
import './transactionform.css'; 



const TransactionForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
      date: '',
      company: '',
      description: '',
      category: '',
      amount: 0,
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5001/api/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Handle success (e.g., show a success message)
          console.log('Transaction submitted successfully');
          onClose(); // Close the form or perform any other necessary action
        } else {
          // Handle error (e.g., show an error message)
          console.error('Transaction submission failed');
        }
      } catch (error) {
        console.error('Error submitting transaction:', error);
      }
    };

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
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
                <input type="date" name="date" value={formData.date} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="row">
                <label>
                    Company
                </label>
                <div className="input">
                <input type="text" name="company" value={formData.company} onChange={handleInputChange}/>
                </div>
            </div>
              
            <div className="row">
                <label>
                    Description
                </label>
                <div className="input">
                <input type="text" name="description" value={formData.description} onChange={handleInputChange}/>
                </div>
            </div>
            
            <div className="row">
                <label>
                    Category
                </label>
                <div className="input">
                <select name="category" value={formData.category} onChange={handleInputChange}>
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
                <input type="decimal" name="amount" value={formData.amount} onChange={handleInputChange}/>
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
