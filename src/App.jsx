import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/components/Landing';
import ContentGuide from '../src/components/ContentGuide';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/content-guide" element={<ContentGuide />} />
      </Routes>
    </Router>
  );
};

export default App;