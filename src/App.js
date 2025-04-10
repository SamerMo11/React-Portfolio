import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from 'src/Layout/Home';
function App() {
  return (
    <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={< />} /> */}
    </Routes>
  </Router>
  );
}

export default App;
