import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <div className="header text-white lg:p-8 lg:flex-row sm:flex flex-col justify-between">
          <h3 className="sm:text-2xl font-bold lg:text-4xl">QuizTime</h3>
          <nav className="lg:text-xl sm:text-lg flex gap-3 lg:flex-row sm:flex flex-col">
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