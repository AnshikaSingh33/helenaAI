import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/components/Landing';
import ContentGuide from '../src/components/ContentGuide';
import Login from './components/login';
import SignUp from './components/signUp';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/content-guide" element={<ContentGuide />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUP' element={<SignUp/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
};

export default App;