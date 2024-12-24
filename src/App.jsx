import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from '../src/components/Landing';
import ContentGuide from '../src/components/ContentGuide';
import SignUp from './components/signUp';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import Landing from '../src/components/Landing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/content-guide" element={<ContentGuide />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Landing' element={<Landing/>}/>
      </Routes>
    </Router>
  );
};

export default App;