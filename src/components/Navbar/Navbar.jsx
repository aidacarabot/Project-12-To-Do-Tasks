import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/" activeClassName="active-link">Home</Link></li>
        <li><Link to="/completed" activeClassName="active-link">Completed</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar