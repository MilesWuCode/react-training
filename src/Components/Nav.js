import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="space-x-2">
      <Link to="/">Home</Link>
      <Link to="/react-router-dom">React Router Dom</Link>
      <Link to="/tailwind-css">Tailwind CSS</Link>
      <Link to="/redux">Redux</Link>
    </div>
  );
}

export default Nav;
