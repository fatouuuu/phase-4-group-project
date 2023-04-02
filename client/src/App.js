import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail';
import RecipeList from './components/RecipeList';

function App() {
  return (
 
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/recipes" component={RecipeList} />
        <Route path="/" component={RecipeDetail}/>
        
      </Routes>
    </BrowserRouter>
  );
}

 export default App;
