import React, { useState } from "react";

export default function Login({ setUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // mock login
    if (id && password) {
      setUser({ id });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>College Connect</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        /><br/><br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

