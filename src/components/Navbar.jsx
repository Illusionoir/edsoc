import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <Link to="/feed">Feed</Link>
      <Link to="/communities">Communities</Link>
      <span style={{ marginLeft: "auto" }}>Logged in as: {user.id}</span>
      <button onClick={() => setUser(null)}>Logout</button>
    </nav>
  );
}

