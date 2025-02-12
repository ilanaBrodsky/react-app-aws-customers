import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [idToAdd, setIdToAdd] = useState('');
  const [idToCheck, setIdToCheck] = useState('');
  const [checkResult, setCheckResult] = useState('');
  const [message, setMessage] = useState('');

  const putApiUrl = 'https://tpc90unj0b.execute-api.us-east-1.amazonaws.com/prod/put_customer_id';
  const getApiUrl = 'https://mz52oy6obe.execute-api.us-east-1.amazonaws.com/prod/get_customer_id';

  const handleAddId = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(putApiUrl, { id: idToAdd }, { headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*' } });
      setMessage(`ID ${idToAdd} added successfully!`);
      setIdToAdd('');
    } catch (error) {
      console.error(error)
      setMessage('Error adding ID!');
    }
  };

  const handleCheckId = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${getApiUrl}?id=${idToCheck}`);
      if (response.data.exists) {
        setCheckResult(`ID ${idToCheck} exists in the database.`);
      } else {
        setCheckResult(`ID ${idToCheck} does not exist.`);
      }
      setIdToCheck('');
    } catch (error) {
      console.error(error)
      setCheckResult('Error checking ID!');
    }
  };

  return (
    <div>
      <h1>Customer ID Management</h1>
      <div>
        <h2>Add Customer ID</h2>
        <form onSubmit={handleAddId}>
          <input
            type="text"
            value={idToAdd}
            onChange={(e) => setIdToAdd(e.target.value)}
            placeholder="Enter Customer ID"
            required
          />
          <button type="submit">Add ID</button>
        </form>
      </div>
      <div>
        <h2>Check if Customer ID Exists</h2>
        <form onSubmit={handleCheckId}>
          <input
            type="text"
            value={idToCheck}
            onChange={(e) => setIdToCheck(e.target.value)}
            placeholder="Enter Customer ID to Check"
            required
          />
          <button type="submit">Check ID</button>
        </form>
        <p>{checkResult}</p>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
