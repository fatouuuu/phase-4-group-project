import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './utils/Protected';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import UserProfile from './components/UserProfile';
import LandingPage from './components/LandingPage';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => { 
          setIsAuthenticated(true)
          setCurrentUser(data.data)});
      }
    });
  }, []);

  const handleLogin = (user) => {
    setIsAuthenticated(true)
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setCurrentUser(null)
  }

  return (

    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}

        <Route path='/' element={<LandingPage />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login onLogin={handleLogin} />} />
        <Route path='home' element={
          <Protected >
          <Home onLogout={handleLogout} user={currentUser}/>
        </Protected>
        } />
        
        <Route path="/recipes" element={
          <Protected>
            <RecipeList />
          </Protected>
        } />    
        
        <Route path="/profile" element={
          <Protected>
            <UserProfile />
          </Protected>
        } />

        <Route path="/recipes/:id" element={
          <Protected>
            <RecipeDetail />
          </Protected>
        } />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
