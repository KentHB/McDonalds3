import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import McDonalds from '../pages/McDonalds';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<McDonalds />} />
    </Routes>
  </Router>
);

export default App;
