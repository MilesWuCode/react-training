import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/react-router-dom">React Router Dom</Link>
      <Link to="/tailwind-css">Tailwind CSS</Link>
    </div>
  );
}

export default Nav;
