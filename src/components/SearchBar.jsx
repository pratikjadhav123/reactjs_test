import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchWeather } from '../utils/api';

function SearchBar() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const weatherData = await searchWeather(city);
    
      console.log('Weather Data:', weatherData);
      navigate('/weather');
    } catch (error) {
      
      console.error('Error:', error);
      navigate('/error');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
