import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import quiztime from '../../images/quiztimes.png'

const Header = () => {
    return (
      <div>
        <div className="header text-white lg:p-10 lg:flex-row sm:flex flex-col justify-between">
          <h3 className="sm:text-xl font-bold lg:text-4xl">Quiz Maker</h3>
          <nav className="lg:text-xl sm:text-lg">
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
        <div className='sub-header'>
          <img className='p-1 w-full h-80' src={quiztime} alt="" />
          <p className='p-5 text-xl text-white'>The quiz maker that's easy to use, fun and fully customizable.</p>
        </div>
      </div>
    );
};

export default Header;