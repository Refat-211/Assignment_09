import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <div className="header text-white lg:p-10 lg:flex-row sm:flex flex-col justify-between">
          <h3 className="sm:text-xl font-bold lg:text-4xl">Quiz Maker</h3>
          <nav className="lg:text-xl sm:text-lg">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/topics"
            >
              Topics
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/blog"
            >
              Blog
            </NavLink>
          </nav>
        </div>
      </div>
    );
};

export default Header;