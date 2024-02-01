import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import History from './components/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<WeatherDisplay />} />
        <Route path="/error" element={<ErrorDisplay />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
