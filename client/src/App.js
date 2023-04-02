import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
  

      </Routes>
    </BrowserRouter>
  );
}

export default App;
