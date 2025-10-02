import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Feed from "./components/Feed";
import CommunityList from "./components/CommunityList";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {user && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/feed" element={user ? <Feed /> : <Navigate to="/login" />} />
        <Route path="/communities" element={user ? <CommunityList /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={user ? "/feed" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;

