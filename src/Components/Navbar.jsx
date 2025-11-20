import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#eee", padding: "10px" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/about" style={{ margin: "10px" }}>About</Link>
      <Link to="/Blog" style={{ margin: "10px" }}>Blog</Link>
    </nav>
  );
}

export default Navbar;
