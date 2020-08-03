import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="px-8 pt-2 bg-white shadow-md">
      <div className="flex justify-center">
        <NavLink
          exact
          to="/"
          className="py-3 mr-8 text-xs font-bold tracking-wide text-teal-500 no-underline uppercase border-b-2 border-transparent"
          activeClassName="border-teal-500"
        >
          Home
        </NavLink>
        <NavLink
          to="/react-router-dom"
          className="py-3 mr-8 text-xs font-bold tracking-wide text-teal-500 no-underline uppercase border-b-2 border-transparent"
          activeClassName="border-teal-500"
        >
          React Router Dom
        </NavLink>
        <NavLink
          to="/tailwind-css"
          className="py-3 mr-8 text-xs font-bold tracking-wide text-teal-500 no-underline uppercase border-b-2 border-transparent"
          activeClassName="border-teal-500"
        >
          Tailwind CSS
        </NavLink>
        <NavLink
          to="/redux"
          className="py-3 mr-8 text-xs font-bold tracking-wide text-teal-500 no-underline uppercase border-b-2 border-transparent"
          activeClassName="border-teal-500"
        >
          Redux
        </NavLink>
        <NavLink
          to="/ajax"
          className="py-3 mr-8 text-xs font-bold tracking-wide text-teal-500 no-underline uppercase border-b-2 border-transparent"
          activeClassName="border-teal-500"
        >
          Ajax
        </NavLink>
        <NavLink
          to="/form"
          className="py-3 mr-8 text-xs font-bold tracking-wide text-teal-500 no-underline uppercase border-b-2 border-transparent"
          activeClassName="border-teal-500"
        >
          Form
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
