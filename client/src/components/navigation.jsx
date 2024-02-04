import React from 'react';
import logo from './test.png';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
        <div className='header'>
        <nav>
          <ul className='flex justify-center space-x-8'>
            <li>
              <Link to="/" className='text-blue-500 hover:text-blue-800'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tool" className='text-blue-500 hover:text-blue-800'>
                Tool
              </Link>
            </li>
            <li>
              <Link to="/test" className='text-blue-500 hover:text-blue-800'>
                Documentation
              </Link>
            </li>
          </ul>
        </nav>
      </div>
        </nav>
    );
};

export default Navigation;
