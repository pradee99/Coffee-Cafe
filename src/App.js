import React, { useState } from 'react';  // Import useState from React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Menu from './pages/Menu';
import NavBar from "./components/NavBar"; // Import the NavBar

function App() {
  const [items, setItems] = useState([]);  // Manage menu items here
  const [updateMessage, setUpdateMessage] = useState(""); // State to store success message

  return (
    <Router>
      <NavBar /> {/* Render the navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu items={items} />} /> {/* Pass items to Menu component */}
        <Route path="/admin" element={<Admin setItems={setItems} setUpdateMessage={setUpdateMessage}/>} /> {/* Pass setItems function to Admin */}
        <Route path="/login" element={<Login />} />
      </Routes>
      {updateMessage && <div className="success-message">{updateMessage}</div>} {/* Display success message */}
    </Router>
    
  );
}

export default App;
