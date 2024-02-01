import React, { useState } from 'react';

function History() {
  
  const [searchHistory, setSearchHistory] = useState([]);

 
  const addToHistory = (city) => {
    const updatedHistory = [city, ...searchHistory.slice(0, 4)];
    setSearchHistory(updatedHistory);
  };

 
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searchHistory.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
