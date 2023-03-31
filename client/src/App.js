import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<LandingPage />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App