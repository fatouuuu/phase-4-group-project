import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
