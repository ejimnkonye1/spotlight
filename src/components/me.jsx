import React, { useState } from 'react';

const YourComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Mapping input values to display values
    const displayMapping = {
      '1': 'one',
      '2': 'two',
      // Add more mappings as needed
    };

    // Set display text based on input value
    setDisplayText(displayMapping[value] || '');
  };

  const handleSubmit = () => {
    // You can perform actions with the input value here, such as sending it to a server
    console.log('Submitted value:', inputValue);
    // Clear input after submission if needed
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Display: {displayText}</p>
    </div>
  );
};

export default YourComponent;
