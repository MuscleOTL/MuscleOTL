import React from 'react';
import Home from './Home.jsx';
import Body from './BodyPage.jsx';
// import Modal from './Modal.jsx';
import { Routes, Route } from 'react-router-dom';
import '../static/styles.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/body' element={<Body />} />
    </Routes>
  );
}

export default App;
