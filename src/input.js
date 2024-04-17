import React, { useState, useEffect } from 'react';

function InputComponent() {
    const [input, setInput] = useState('');
    const [displayedInput, setDisplayedInput] = useState('');
  
    // useEffect to log input changes
    useEffect(() => {
      console.log('Input:', input);
    }, [input]); // Dependency array with input, so the effect runs whenever input changes
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleDisplayClick = () => {
      setDisplayedInput(input);
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
        <button onClick={handleDisplayClick}>Display Input</button>
        <br />
        {displayedInput && (
          <div>
            <h3>Displayed Input:</h3>
            <p>{displayedInput}</p>
          </div>
        )}
      </div>
    );
}

export default InputComponent;
