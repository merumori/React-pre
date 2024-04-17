import React, { useState } from 'react';
import axios from 'axios';

function InputDisplayComponent() {
  const [input, setInput] = useState('');
  const [apiData, setApiData] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFetchClick = () => {
    // Replace 'https://api.example.com/data' with the actual API endpoint
    axios.get('https://api.example.com/data')
      .then(response => {
        setApiData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h2>Input Display Component</h2>
      <label>
        Input:
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={handleFetchClick}>Fetch Data</button>
      <br />
      {apiData && (
        <div>
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default InputDisplayComponent;
