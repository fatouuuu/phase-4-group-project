import React from 'react'

function Home({ onLogout }) {
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        localStorage.clear()
        onLogout()
    }
  return (
    <div>
        <h1>Home </h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home