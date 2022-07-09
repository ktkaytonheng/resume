import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '@/pages/home/Home';
import '@/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
