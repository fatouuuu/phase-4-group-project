import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({ handleLogoutClick }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function UserProfile({ userId, setUser }) {
  const [user, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserDetails(data));
  }, [userId]);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" })
    navigate('/login')
  }

  return (
    <>
      <Navbar handleLogoutClick={handleLogoutClick} />
      {user ? (
        <div>
          <h1>{user.username}</h1>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
}

export default UserProfile;